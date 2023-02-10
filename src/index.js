// import { DRM } from './drm';
import { Widevine } from './drm/widevine';
import { Playready } from './drm/playready';
import { sleep, getMedia } from "./utils";
import { NXTMediaTrack } from "./mediatrack"
import { PlaybackController } from "./playbackcontroller"
import { DashManifest } from "./dash/manifest";
import { NativePlayer } from "./nativeplayer";

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

  //manifest data
  dash;
  manifestData;

  // currentPlayingBufferIndex
  bIndex = 0;
  gapWatching = false;
  isPlaying = false;
  playbackController;


  constructor(options) {
    this.options = options;
    this.videoRepresentationId = 0;
    this.mediaSource = new MediaSource();
    /** define media mime type (should be constant or read from manifest later on) */
    this.videoMimeType = 'video/mp4; codecs="avc1.64001e"';
    this.audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';
    this.eventemitter = new EventEmitter();
    this.playerStatus = 0;
    this.video = options.video;
    this.manifestUpdating = false;
    this.waitingTime = 2000;
    this.bIndex = 0;
    this.gapWatching = false;
    this.playbackController = new PlaybackController(this);
    this.isPlaying = false;
  }

  /**
   * The main entrance of nxtPlayer
   * @returns
   */
  async play() {

    // /**
    //  * Fairplay
    //  */
    // let nativePlayer = new NativePlayer(this.options);
    // nativePlayer.play();
    // return;

    /** check if the browser supports MSE or not */
    if (!window.MediaSource) {
      console.error('>>> [play] => => => No Media Source API available');
      return;
    }

    /** parse manifest by 'mpd-parser' */
    this.dash = new DashManifest(this.options.url);
    this.manifestData = await this.dash.parseMPD();
    console.log('>>> [manifest] => => => manifest loaded');

    /** set mediaSource to video element */
    this.video.src = window.URL.createObjectURL(this.mediaSource);
    console.log('>>> [play] => => => media source setup, readyState = ', this.mediaSource.readyState);
    /** add listener to MediaSource */
    this.mediaSource.addEventListener('sourceopen', this.onMediaSourceOpen.bind(this));
    /** initialize EME for DRM */
    let drm = new Widevine(this);
    await drm.initializeEME();

    this.video.addEventListener('waiting', () => {
      this.isPlaying = false;
    });
    this.video.addEventListener('ended', () => {
      this.isPlaying = false;
    });
    this.video.addEventListener('pause', () => {
      this.isPlaying = false;
    });
    this.video.addEventListener('playing', () => {
      this.isPlaying = true;
    });

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
    var playerError;
    try {
      while(!playerError) {
        if (this.playerStatus > 0) {
          if (this.isPlayable()) {
            if (!this.video.playing || this.video.paused) {
              // this.video.currentTime = this.video.buffered.start(0);
              console.log('>>> [playAsync] => => => PLAYBACK START !!!.');
              this.video.play();
              this.video.currentTime = this.video.buffered.start(this.bIndex) + 0.01;
              this.startUpdatingManifest();
              await sleep(0.2 * 1000)
              this.gapWatching = true;
              this.playbackController.start();
              break;
            }
          }
        }
        await sleep(100);
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
    // create media tracks 
    this.videoTrack = new NXTMediaTrack('video', this);
    this.audioTrack = new NXTMediaTrack('audio', this);
    this.videoTrack.prepare();
    this.audioTrack.prepare();
    console.log('>>> [video/audio buffer] => => => start loading video/audio data ... ');
    if (this.mediaSource.readyState === 'open'
        && this.videoSourceBuffer && this.audioSourceBuffer) {
      this.playerStatus = 1;
      this.audioTrack.startBuffering();
      this.videoTrack.startBuffering();
    }
  }

  startUpdatingManifest() {
    this.manifestUpdating = true;
    console.log('=> => => [reloadManifest] manifest updating job starts ...');
    setInterval(async () => {
      if (this.isPlaying) {
        console.log('=> => => [reloadManifest] start');
        this.manifestData = await this.dash.parseMPD();
        this.videoTrack.refreshData();
        this.audioTrack.refreshData();
      }
    }, 6 * 1000);
  }

  isPlayable() {
    let bufferLength = this.video.buffered.length;
    if (bufferLength > 0  && 
       (this.video.buffered.end(bufferLength - 1) - this.video.buffered.start(bufferLength - 1)) >= 15 ) {
      return true;
    }
    return false;
  }

}

export default NXPlayer;