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

  // indicator that the player has started the manifest updating.
  manifestUpdating = false;

  // waiting time (default: 2000)
  waitingTime = 2000;

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
    this.manifestUpdating = false;
    this.waitingTime = 2000;
  }

  /**
   * The main entrance of nxtPlayer
   * @returns
   */
  async play() {

    /** check if the browser supports MSE or not */
    if (!window.MediaSource) {
      console.error('>>> [play] => => => No Media Source API available');
      return;
    }

    /** setup event listeners */
    this.eventemitter.on('nxtBufferIsEnoughForPlay', this.onBufferIsEnoughForPlay.bind(this));

    /** parse manifest by 'mpd-parser' */
    let manifestData = await parseMPD(this.options.url);
    console.log('>>> [manifest] => => => manifest loaded');
    this.videoTrack.prepare(manifestData.playlists);
    this.audioTrack.prepare(manifestData.mediaGroups.AUDIO.audio.eng.playlists);
    console.log('>>> [video/audio buffer] => => => start loading video/audio data ... ');

    /** set mediaSource to video element */
    this.video.src = window.URL.createObjectURL(this.mediaSource);
    console.log('>>> [play] => => => media source setup, readyState = ', this.mediaSource.readyState);
    /** add listener to MediaSource */
    this.mediaSource.addEventListener('sourceopen', this.onMediaSourceOpen.bind(this));
    /** initialize EME for DRM */
    initializeEME(this.options.drm);

    this.playAsync()
    .catch((err) => {
      console.warn('>>> [play] => => => Playback stopped, by the following error ');
      console.error(err);
    });

  }

  /**
   * set video representation
   * @param {*} id 
   */
  setVideoRepresentation(id) {
    this.videoRepresentationId = id;
  }

  /**
   * the main playback loop
   */
  async playAsync() {
    console.log('>>> [playAsync] => => => playAsync starts');
    var round = 0;  // FOR DEBUG ONLY
    console.log('>>> [playAsync] => => => player engine starts');
    var playerError;
    try {
      while(!playerError) {

        if (this.playerStatus > 0) {

          if (this.video.buffered.length && this.video.buffered.end(0) - this.video.buffered.start(0) > 30) {
            console.log('>>> [playAsync] => => => the buffer has been bigger than 30 seconds ... ');
            if (!this.video.playing || this.video.paused) {
              this.video.play();
              if (!this.manifestUpdating) {
                this.startUpdatingManifest();
              }
            }
          }

          console.log('>>> [playAsync] => => => getting next chunk ... ');
          let audioBuffer = this.audioTrack.nextBufferChunk();
          let videoBuffer = this.videoTrack.nextBufferChunk();
          console.log('>>> [playAsync] => => => getting next chunk end ');
          // if there is no any buffer, stop the playback.
          if (!videoBuffer && !audioBuffer) {
            // this.mediaSource.endOfStream();
            // this.playerStatus = 0;
            // break;
            console.log('>>> [playAsync] => => => next chunk is empty, wait for next updating ... ');
            await sleep(this.waitingTime);
            continue;
          }
          // append audio buffer
          if (audioBuffer && !this.audioSourceBuffer.updating) {
            console.log('>>> [playAsync] => => => append buffer = ', audioBuffer.url);
            this.audioSourceBuffer.appendBuffer(new Uint8Array(audioBuffer.buffer));
            console.log('>>> [playAsync] => => => buffer appended.');
          }
          // append video buffer
          if (videoBuffer && !this.videoSourceBuffer.updating) {
            console.log('>>> [playAsync] => => => append buffer = ', videoBuffer.url);
            this.videoSourceBuffer.appendBuffer(new Uint8Array(videoBuffer.buffer));
            console.log('>>> [playAsync] => => => buffer appended.');
          }

          this.playerStatus = 2;
        }
        // wait for time that equals the segment duration
        await sleep(this.waitingTime);
        console.log('>>> [playAsync] => => => player engine round ', round++); // FOR DEBUG ONLY
      }
    } catch(err) {
      this.playerStatus = -1;
      console.warn('>>> [playAsync] => => => playback error = ', err);
      throw err;
    }
  }

  /**
   * create audio/video source buffer
   */
  onMediaSourceOpen() {
    console.log('>>> [onMediaSourceOpen] => => => media source status = ', this.mediaSource.readyState);
    this.videoSourceBuffer = this.mediaSource.addSourceBuffer(this.videoMimeType);
    this.audioSourceBuffer = this.mediaSource.addSourceBuffer(this.audioMimeType);
    // set source buffser's mode
    this.videoSourceBuffer.mode = this.setting.sourcebuffer.mode;
    this.audioSourceBuffer.mode = this.setting.sourcebuffer.mode;
    this.audioSourceBuffer.addEventListener('updateend', this.onSourceBufferUpdateEnd.bind(this));
    this.videoSourceBuffer.addEventListener('updateend', this.onSourceBufferUpdateEnd.bind(this));
    if (this.mediaSource.readyState === 'open'
        && this.videoSourceBuffer && this.audioSourceBuffer) {
      this.playerStatus = 1;
      this.audioTrack.startBuffering();
      this.videoTrack.startBuffering();
    }
  }

  /**
   * Fired when the buffer has been downloaded for playback.
   */
  onBufferIsEnoughForPlay() {
    console.log('>>> [video/audio buffer] => => => video/audio data loaded. ');
    console.log('>>> [onBufferIsEnoughForPlay] => => => buffer is enough for playback');
  }

  /**
   * Fired after the buffer has been appended to source buffer object
   */
  onSourceBufferUpdateEnd() {
    console.log('>>> [onSourceBufferUpdateEnd] => => => buffer is update end');
  }

  startUpdatingManifest() {
    this.manifestUpdating = true;
    console.log('=> => => [reloadManifest] manifest updating job starts ...');
    setInterval(async () => {
      console.log('=> => => [reloadManifest] start');
      let manifestData = await reloadMPD(this.options.url);
      this.videoTrack.resetData(manifestData.playlists);
      this.audioTrack.resetData(manifestData.mediaGroups.AUDIO.audio.eng.playlists);
      console.log('=> => => [reloadManifest] manifest reloaded');
    }, 6 * 1000);
  }

}

export default NXPlayer;