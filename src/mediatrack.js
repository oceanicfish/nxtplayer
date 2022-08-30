import { sleep } from "./utils";

export class NXTMediaTrack {
  type;
  segments = [];
  representations = [];
  representationId = 0;
  bufferQueue = [];
  targetBufferLength = 60;
  bufferedLength = 0;
  currentSegmentNumber = 0;
  /**
   * -1: error
   * 0: initial
   * 1: fetching
   * 2: buffer queue is full, stop fetching new segment 
   */
  status = 0; 
  initSegmentUri;

  constructor(type, player) {
    this.type = type;
    this.segments = [];
    this.representations = [];
    this.representationId = 0;
    this.bufferQueue = [];
    this.targetBufferLength = 60;
    this.bufferedLength = 0;
    this.currentSegmentNumber = 0;
    this.status = 0;
    this.initSegmentUri = null;
  }

  async prepare(representations) {
    this.bufferedLength = 0;
    this.representations = representations;
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
            if (this.initSegmentUri && s.map.resolvedUri === this.initSegmentUri) {
              let response = await fetch(s.resolvedUri);
              if (response.status === 200) {
                let buffer = await response.arrayBuffer();
                this.bufferQueue.push({
                  type: 'normal',
                  duration: s.duration,
                  url: s.resolvedUri,
                  buffer: buffer
                });
                console.log('(mediatrack.js) >>> [fetched] => => => segment = ', s.resolvedUri);
                this.bufferedLength = this.bufferedLength + s.duration;
                this.currentSegmentNumber++;
              }else {
                console.error('(mediatrack.js) >>> [fetching failed] => => => segment = ', s.resolvedUri);
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
                console.log('(mediatrack.js) >>> [init segment fetched] => => => segment = ', this.initSegmentUri);
              } else {
                console.error('(mediatrack.js) >>> [init segment fetching failed] => => => segment = ', this.initSegmentUri);
              }
            }
          }
        }else {
          // if all the semgents have been buffered, wait for the next manifest updating.
          await sleep(player.waitingTime);
        }
      }else {
        player.eventemitter.emit('nxtBufferIsEnoughForPlay');
        await sleep(player.waitingTime);
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
    return segment.map.resolvedUri;
  }

  nextBufferChunk() {
    var chunk = this.bufferQueue.shift();
    if (chunk && chunk.duration > 0) {
      this.bufferedLength = this.bufferedLength - chunk.duration;
    }
    return chunk;
  }

  resetData(representations) {
    this.representations = representations;
    console.log('(mediatrack.js) => => => [reloadManifest] segment reloaded, new segment is from No.', 
                  this.getTheFirstNumber(), ' to No.', this.getTheLastNumber());
  }

  getTheLastNumber() {
    let length = this.representations[this.representationId].segments.length;
    return this.representations[this.representationId].segments[length - 1].number;
  }

  getTheFirstNumber() {
    return this.representations[this.representationId].segments[0].number;
  }

}