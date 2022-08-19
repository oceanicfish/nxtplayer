import { parseMPD, reloadMPD } from "./mpd";
import { initializeEME } from './drm';
import { getMedia } from "./utils";
import { NXTMediaTrack } from "./mediatrack"
import { startABRController } from "./abrcontroller"

class NXPlayer {
  options;
  videoRepresentationId;
  constructor(options) {
    this.options = options;
    this.videoRepresentationId = 0;
  }

  /**
   * The main entrance of nxtPlayer
   * @returns
   */
  async play() {
    /** pre-define sourceBuffer */
    let videoSourceBuffer;
    let audioSourceBuffer;
    var manifestData;
    var videoTrack = new NXTMediaTrack('video');
    var audioTrack = new NXTMediaTrack('audio');
    var videoIndex = 0;
    var audioIndex = 0;
    var firstReload = true;
    var videoRepresentationId =  this.videoRepresentationId;

    /** parse manifest by 'mpd-parser' */
    manifestData = await parseMPD(this.options.url);


    /** --- update manifest data --- **/
    /** start the reloading */
    setInterval(async () => {
      if (!firstReload) {
        console.log('=> => => [reloadManifest] start');
        manifestData = await reloadMPD(this.options.url);
        console.log('=> => => [reloadManifest] manifest reloaded');
        videoTrack.resetPresentations(manifestData.playlists);
        audioTrack.resetPresentations(manifestData.mediaGroups.AUDIO.audio.eng.playlists);
        console.log('=> => => [reloadManifest] end');
      }else {
        firstReload = false;
      }
    }, 10000);

    videoTrack.setRepresentations(manifestData.playlists);
    audioTrack.setRepresentations(manifestData.mediaGroups.AUDIO.audio.eng.playlists);

    // aws multi period
    var videoInitialSegmentUri = videoTrack.getInitialSegment().map.resolvedUri;
    var audioInitialSegmentUri = audioTrack.getInitialSegment().map.resolvedUri;

    /** get video element under control */
    const video = document.querySelector('video');

    /** check if the browser supports MSE or not */
    if (!window.MediaSource) {
      console.error('No Media Source API available');
      return;
    }

    /** create MSE instance */
    const mediaSource = new MediaSource();
    /** set mediaSource to video element */
    video.src = window.URL.createObjectURL(mediaSource);
    /** define media mime type (should be constant or read from manifest later on) */
    const videoMimeType = 'video/mp4; codecs="avc1.64001e"';
    const audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

    /** Add callback function [onMediaSourceOpen]  */
    mediaSource.addEventListener('sourceopen', onMediaSourceOpen);

    /**
     * video element event listeners
     */
    // video.addEventListener('canplay', function () {
    //   video.play();
    // });

    initializeEME(this.options.drm);
    /**
     *
     */
    function onMediaSourceOpen() {
      console.warn('=> => => onMediaSourceOpen start');
      videoSourceBuffer = mediaSource.addSourceBuffer(videoMimeType);
      videoSourceBuffer.mode = 'sequence';
      audioSourceBuffer = mediaSource.addSourceBuffer(audioMimeType);
      audioSourceBuffer.mode = 'sequence';
      videoSourceBuffer.addEventListener('updateend', nextSegment('video'));
      audioSourceBuffer.addEventListener('updateend', nextSegment('audio'));
      // start loading the initial segment
      getMedia(videoInitialSegmentUri).then(appendToBuffer('video'));
      getMedia(audioInitialSegmentUri).then(appendToBuffer('audio'));
      console.warn('=> => => onMediaSourceOpen end');
    }

    /**
     * calculate the next segment
     * @param {*} type 
     * @returns 
     */
    function nextSegment(type) {
      const sourcebuffer = type === 'video' ? videoSourceBuffer : audioSourceBuffer;
      return function () {
        // buffering controlling, if the buffered length is over 60s, stop the appending.
        if (video.buffered.length && video.buffered.end(0) - video.buffered.start(0) > 20) {
          console.log('=> => => [removeSourceBuffer] buffer is too big to append');
          return;
        }
        // append buffer data
        if (type === 'video') {
          // get the current video segment
          let currentVideoSegment = videoTrack.getSegment(videoIndex);
          // if the current segment is available, append it to the source buffer.
          if (currentVideoSegment) {
            if (currentVideoSegment.map.resolvedUri === videoInitialSegmentUri) {
              getMedia(currentVideoSegment.resolvedUri).then(appendToBuffer(type));
              videoIndex++;
            } else {
              videoInitialSegmentUri = currentVideoSegment.map.resolvedUri;
              getMedia(videoInitialSegmentUri).then(appendToBuffer(type));
            }
          }
        } else {
          // get the current audio segment
          let currentAudioSegment = audioTrack.getSegment(audioIndex);
          // if the current segment is available, append it to the source buffer.
          if (currentAudioSegment) {
            if (currentAudioSegment.map.resolvedUri === audioInitialSegmentUri) {
              getMedia(currentAudioSegment.resolvedUri).then(appendToBuffer(type));
              audioIndex++;
            } else {
              audioInitialSegmentUri = currentAudioSegment.map.resolvedUri;
              getMedia(audioInitialSegmentUri).then(appendToBuffer(type));
            }
          }
        }
      };
    }

    /**
     * append buffer data
     * @param {*} type 
     * @returns 
     */
    function appendToBuffer(type) {
      const sourcebuffer = type === 'video' ? videoSourceBuffer : audioSourceBuffer;
      return function (chunk, error) {
        if (mediaSource.readyState === 'open' && sourcebuffer && sourcebuffer.updating === false) {
          if (chunk) {
            try {
              console.log('=> => => [appendToBuffer] append chunk data to source buffer.');
              sourcebuffer.appendBuffer(new Uint8Array(chunk));
              console.log('=> => => [appendToBuffer] source buffer appended.');
            } catch (e) {
              console.error(e);
              console.error(video.error);
              return;
            }
          }
        }
      };
    }

    /** source buffer monitoring, source buffer removing */
    setInterval(async () =>{
      if (video.buffered.length && video.buffered.end(0) - video.buffered.start(0) > 20) {
        console.log(
          '=> => => [removeSourceBuffer] start = ',
          video.buffered.start(0),
          ', end = ',
          video.buffered.end(0),
          ', video.currentTime = ',
          video.currentTime
        );
        if (video.currentTime - 10 > 0) {
          videoSourceBuffer.remove(0, video.currentTime - 10);
          audioSourceBuffer.remove(0, video.currentTime - 10);
          console.log('=> => => [removeSourceBuffer] source buffer removed.');
        }
      }
    }, 1000);

    /** start the ABR controller */
    startABRController(this, videoTrack);
  }

  /**
   * set video representation
   * @param {*} id 
   */
  setVideoRepresentation(id) {
    this.videoRepresentationId = id;
  }
}

export default NXPlayer;