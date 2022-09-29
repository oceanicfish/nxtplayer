import { sleep } from "./utils";

const EventEmitter = require('events');

export class NXTMediaTrack {
  type;
  segments = [];
  representations = [];
  representationId = 0;
  bufferQueue = [];
  targetBufferLength;
  bufferedLength = 0;
  currentSegmentNumber = 0;
  /**
   * -1: error
   * 0: initial
   * 1: fetching
   * 2: buffer queue is full, stop fetching new segment 
   */
  status = 0; 
  sourceBufferIsAppending = false;
  initSegmentUri;
  currentAppendingChunk;

  player;
  sourcebuffer;
  event;

  isPlayingAd;

  gaps = [];
  adChunks = [];
  currentTimeline = 0;

  constructor(type, player) {
    this.type = type;
    this.player = player;
    if (type === 'video') {
      this.sourcebuffer = player.videoSourceBuffer;
      // this.sourcebuffer = player.mediaSource.addSourceBuffer('video/mp4; codecs="avc1.64001e"');
    } else {
      this.sourcebuffer = player.audioSourceBuffer;
      // this.sourcebuffer = player.mediaSource.addSourceBuffer('audio/mp4; codecs="mp4a.40.2"');
    }
    this.segments = [];
    this.representations = [];
    this.representationId = 0;
    this.bufferQueue = [];
    this.targetBufferLength = 0.25 * 60;
    this.bufferedLength = 0;
    this.currentSegmentNumber = 0;
    this.status = 0;
    this.initSegmentUri = null;
    this.sourceBufferIsAppending = false;
    this.event = new EventEmitter();
    this.isPlayingAd = false;

    this.currentTimeline = 0;

    /** setup event listeners */
    this.event.on('nxtBufferIsEnoughForPlay', this.onBufferIsEnoughForPlay.bind(this));
  }

  async prepare() {
    this.bufferedLength = 0;
    if (this.type === 'video') {
      this.representations = this.player.manifestData.video;
    } else {
      this.representations = this.player.manifestData.audio;
    }
    this.gaps = this.player.manifestData.discontinuityStarts;
  }

  async startFeedingBuffer() {
    this.sourcebuffer.addEventListener('updateend', this.onSourceBufferUpdateEnd);
    var firstFeeding = true;
    var offset = 0;
    var timeline = 0;
    var error;
    while (!error) {
      if (this.sourcebuffer.updating) {
        // wait for updatedend event for 0.1s
        await sleep(500);
      } else {
        try {
          // append buffer
          let chunk = this.nextBufferChunk();
          if (!chunk) {
            await sleep(0.2 * 1000);
          } else {
            this.currentAppendingChunk = chunk;
            if (chunk.type === 'normal') {
              console.log('[append buffer] => => => chunk = ', chunk.uri);
              /**
               * set timestampOffset individually 
               */
              if (chunk.uri.startsWith('asset')) {
                // for Ad period, we need to reset the start position.
                this.sourcebuffer.timestampOffset = chunk.timeline;
              } else {
                // for media period, always set to the beginning of the content.
                this.sourcebuffer.timestampOffset = 0;
              }
            }
            this.sourcebuffer.appendBuffer(new Uint8Array(chunk.buffer));
            await sleep(0.2 * 1000);
          }
        } catch (e) {
          error = e;
          console.error('>>> (mediatrack.js) => => => Error: ', error);
          break;
        }
      }
    }
  }

  async startBuffering() {
    while (player.playerStatus > 0) {
      // to check if the downloaded buffered has reach the target buffer length
      if (this.bufferedLength <= this.targetBufferLength) {
        // to check if all the segment has been buffered or not 
        if (this.currentSegmentNumber <= this.getTheLastNumber()) {
          // if there is segment has not been buffered, and the buffered length is still meet the target, continue to download
          var s = this.getSegmentByNumber(this.currentSegmentNumber);
          if (!s) {
            console.warn('(mediatrack.js) >>> segment does not exist, segment number = ', this.currentSegmentNumber);
            this.currentSegmentNumber++;
            // break;
          }else {
            let resolvedUri = s.baseUrl + s.uri;
            if (this.initSegmentUri && this.getInitSegment(s) === this.initSegmentUri) {
              // if (this.type === 'video') {
              //   if (this.gaps.indexOf(s.number) > 0 || s.number === 0) {
              //       if (s.uri.startsWith('asset')) {
              //         console.log('[gap time] ad => => => ', s.timeline);
              //       } else {
              //         console.log('[gap time] media => => => ', s.timeline);
              //       }
              //   }
              // }
              let response = await fetch(resolvedUri);
              if (response.status === 200) {
                let buffer = await response.arrayBuffer();
                this.bufferQueue.push({
                  type: 'normal',
                  number: s.number,
                  duration: s.duration,
                  presentationTime : s.presentationTime,
                  timeline: s.timeline,
                  isEndOfPeriod: this.isEndOfPeriod(s),
                  uri: s.uri,
                  url: resolvedUri,
                  buffer: buffer
                });
                console.log('(mediatrack.js) >>> [fetched] => => => segment = ', resolvedUri);
                this.bufferedLength = this.bufferedLength + s.duration;
                // console.log('(mediatrack.js) => => => this.bufferedLength = ', this.bufferedLength);
                this.currentSegmentNumber++;
              }else {
                console.error('(mediatrack.js) >>> [fetching failed] => => => segment = ', resolvedUri);
              }
            } else {
              this.initSegmentUri = this.getInitSegment(s);
              let response = await fetch(this.initSegmentUri);
              if (response.status === 200) {
                let buffer = await response.arrayBuffer();
                this.bufferQueue.push({
                  type: 'init',
                  duration: 0,
                  url: this.initSegmentUri,
                  buffer: buffer
                });
                // console.log('(mediatrack.js) >>> [init segment fetched] => => => segment = ', this.initSegmentUri);
              } else {
                console.error('(mediatrack.js) >>> [init segment fetching failed] => => => segment = ', this.initSegmentUri);
              }
            }
          }
        } else {
          // if all the semgents have been buffered, wait for the next manifest updating.
          console.log('(mediatrack.js) >>> manifest has been run out, waiting for update...');
          console.log('this.getTheLastNumber() = ', this.getTheLastNumber());
          console.log('this.currentSegmentNumber = ', this.currentSegmentNumber);
          await sleep(6000); // minimum update time
          console.log('(mediatrack.js) >>> manifest downloading is about to continue...');
          // break;
        }
      } else {
        this.event.emit('nxtBufferIsEnoughForPlay');
        await sleep(500); // wait for segment comsuming;
      }
    }
  }

  getSegmentByNumber(number) {
    var segment;
    for (var i = 0; i < this.representations[this.representationId].segments.length; i++) {
      if (this.representations[this.representationId].segments[i].number === number) {
        segment = this.representations[this.representationId].segments[i];
        break;
      }
    }
    return segment;
  }

  setRpresentationId(id) {
    this.representationId = id;
  }

  getInitSegment(segment) {
    return segment.baseUrl + segment.init;
  }

  nextBufferChunk() {
    var chunk = this.bufferQueue.shift();
    if (chunk && chunk.duration > 0) {
      this.bufferedLength = this.bufferedLength - chunk.duration;
    }
    return chunk;
  }

  refreshData() {
    if (this.type === 'video') {
      this.representations = this.player.manifestData.video;
    } else {
      this.representations = this.player.manifestData.audio;
    }
    this.gaps = this.player.manifestData.discontinuityStarts;
    console.log('(mediatrack.js) >>> ', this.type, ' track data has been updated');
  }

  getTheLastNumber() {
    let length = this.representations[this.representationId].segments.length;
    return this.representations[this.representationId].segments[length - 1].number;
  }

  getTheFirstNumber() {
    return this.representations[this.representationId].segments[0].number;
  }

  isEndOfPeriod(s) {
    if (this.gaps.indexOf(s.number) !== -1) {
      return true;
    } else {
      return false;
    }
  }

  getSegmentPresentationTime(s) {
    var presentationTime = 0;
    if (!s.uri.startsWith('asset')) {
      presentationTime = s.timeline;
      if (s.timeline != this.currentTimeline) {
        // console.log('media timeline = ', s.timeline);
        this.currentTimeline = s.timeline;
      }
    }
    return presentationTime;
  }

  getSegmentByTime(position) {
    var len = 0;
    var nextLen = 0;
    for(var i = 1; i < this.representations[this.representationId].segments.length; i++) {
      len = len + this.representations[this.representationId].segments[i-1].duration;
      nextLen = len + this.representations[this.representationId].segments[i].duration;
      if (position > len && position < nextLen) {
        return this.representations[this.representationId].segments[i]
      }
    }
    return null;
  }

  /**
   * --------------------------------------------- -------------- --------------------------------------------------- *
   * --------------------------------------------- event listener --------------------------------------------------- *
   * --------------------------------------------- -------------- --------------------------------------------------- *
   */

  /**
   * Fired when the buffer has been downloaded for playback.
   */
  onBufferIsEnoughForPlay() {
    if (this.status < 2) {
      console.log('>>> [onBufferIsEnoughForPlay] => => => ', this.type ,' data buffer is enough for playback.');
      this.status = 2;
      this.startFeedingBuffer();
    }
  }

  onSourceBufferUpdateStart() {
    console.log('(mediatrack.js) >>> [Buffer Appending Start] => => => chunk = ', this.currentAppendingChunk ? this.currentAppendingChunk.url : 'NaN');
    this.sourceBufferIsAppending = true;
  }


  onSourceBufferUpdateEnd() {
    // console.log('[onSourceBufferUpdateEnd] => => => source buffer buffered length = ', this.buffered.length);
    if ( this.buffered.length > 0) {
      let maxIndex = this.buffered.length - 1;
      console.log('buffered (', maxIndex ,'): ', this.buffered.start(maxIndex), ' ~ ', this.buffered.end(maxIndex));
    }
  }
}