import { parseMPD, reloadMPD } from "./mpd";
import { initializeEME } from './drm';
import { sleep, getMedia } from "./utils";
import { NXTMediaTrack } from "./mediatrack"
import { startABRController } from "./abrcontroller"

const EventEmitter = require('events');

class NXPlayer {

  setting = {
    sourcebuffer: {
      mode: 'sequence',
      buffersize: 60
    },
  };

  options;
  video;
  videoRepresentationId;
  mediaSource;
  videoSourceBuffer;
  audioSourceBuffer;
  videoTrack;
  audioTrack;
  videoMimeType;
  audioMimeType;
  eventemitter;
  /**
   * STATUS:
   * -1: error
   * 0: closed
   * 1: initialized (manifest downloaded, media source is ready for use)
   * 2: loading (start to feed the buffer to media source)
   */
  playerStatus = 0;

  constructor(options) {
    this.options = options;
    this.videoRepresentationId = 0;
    this.mediaSource = new MediaSource();
    /** define media mime type (should be constant or read from manifest later on) */
    this.videoMimeType = 'video/mp4; codecs="avc1.64001e"';
    this.audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';
    this.eventemitter = new EventEmitter();
    this.videoTrack = new NXTMediaTrack('video', this);
    this.audioTrack = new NXTMediaTrack('audio', this);
    this.playerStatus = 0;
    this.video = options.video;
  }

  /**
   * The main entrance of nxtPlayer
   * @returns
   */
  async play() {
    /** manifest data */
    var manifestData;

    /** get video element under control */
    // const video = document.querySelector('video');

    /** check if the browser supports MSE or not */
    if (!window.MediaSource) {
      console.error('>>> [play] => => => No Media Source API available');
      return;
    }

    /** setup event listeners */
    this.eventemitter.on('nxtBufferIsEnoughForPlay', this.onBufferIsEnoughForPlay.bind(this));

    /** parse manifest by 'mpd-parser' */
    manifestData = await parseMPD(this.options.url);
    console.log('>>> [manifest] => => => manifest loaded');
    this.videoTrack.prepare(manifestData.playlists);
    // this.audioTrack.prepare(manifestData.mediaGroups.AUDIO.audio.eng.playlists);
    console.log('>>> [video/audio buffer] => => => start loading video/audio data ... ');

    /** set mediaSource to video element */
    this.video.src = window.URL.createObjectURL(this.mediaSource);
    console.log('>>> [play] => => => media source setup, readyState = ', this.mediaSource.readyState);

    this.mediaSource.addEventListener('sourceopen', this.onMediaSourceOpen.bind(this));

    this.playAsync()
    .catch((err) => {
      console.warn('>>> [play] => => => Playback stopped, by the following error ');
      console.error(err);
    });

    this.video.addEventListener('canplay', function () {
      this.video.play();
    });
  }

  /**
   * set video representation
   * @param {*} id 
   */
  setVideoRepresentation(id) {
    this.videoRepresentationId = id;
  }

  async playAsync() {
    console.log('>>> [playAsync] => => => playAsync starts');
    var round = 0;  // FOR DEBUG ONLY
    console.log('>>> [playAsync] => => => player engine starts');
    var playerError;
    try {
      while(!playerError) {

        if (this.playerStatus > 0) {

          if (this.video.buffered.length && this.video.buffered.end(0) - this.video.buffered.start(0) > 10) {
            console.log('>>> [playAsync] => => => the buffer has been bigger than 10 seconds ... ');
            if (!this.video.playing || this.video.paused) {
              this.video.play();
            }
          }


          if (!this.videoSourceBuffer.updating) {
            console.log('>>> [playAsync] => => => start the buffer feeding ... ');
            // let audioBuffer = this.audioTrack.nextBufferChunk();
            let videoBuffer = this.videoTrack.nextBufferChunk();

            if (!videoBuffer) {
              this.mediaSource.endOfStream();
              // this.videoElement.play();
              this.playerStatus = 0;
              break;
            }

            // if (audioBuffer) {
            //   console.log('>>> [playAsync] => => => append buffer = ', audioBuffer.url);
            //   this.audioSourceBuffer.appendBuffer(new Uint8Array(audioBuffer.buffer));
            //   console.log('>>> [playAsync] => => => buffer appended.');
            // }
            if (videoBuffer) {
              console.log('>>> [playAsync] => => => append buffer = ', videoBuffer.url);
              this.videoSourceBuffer.appendBuffer(new Uint8Array(videoBuffer.buffer));
              console.log('>>> [playAsync] => => => buffer appended.');
            }

            this.playerStatus = 2;
          }
        }
        await sleep(500);
        console.log('>>> [playAsync] => => => player engine round ', round++); // FOR DEBUG ONLY
      }
    } catch(err) {
      this.playerStatus = -1;
      console.warn('>>> [playAsync] => => => playback error = ', err);
      throw err;
    }
  }

  onMediaSourceOpen() {
    console.log('>>> [onMediaSourceOpen] => => => media source status = ', this.mediaSource.readyState);
    this.videoSourceBuffer = this.mediaSource.addSourceBuffer(this.videoMimeType);
    // this.audioSourceBuffer = this.mediaSource.addSourceBuffer(this.audioMimeType);
    // set source buffser's mode
    this.videoSourceBuffer.mode = this.setting.sourcebuffer.mode;
    // this.audioSourceBuffer.mode = this.setting.sourcebuffer.mode;
    // this.audioSourceBuffer.addEventListener('updateend', this.onSourceBufferUpdateEnd);
    this.videoSourceBuffer.addEventListener('updateend', this.onSourceBufferUpdateEnd);
  }

  onBufferIsEnoughForPlay() {
    console.log('>>> [video/audio buffer] => => => video/audio data loaded. ');
    console.log('>>> [onBufferIsEnoughForPlay] => => => buffer is enough for playback');
    if (this.mediaSource.readyState === 'open'
        && this.videoSourceBuffer) {
      this.playerStatus = 1;
    }
  }

  onSourceBufferUpdateEnd() {
    console.log('>>> [onSourceBufferUpdateEnd] => => => buffer is update end');
  }

}

export default NXPlayer;