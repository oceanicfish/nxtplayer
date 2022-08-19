import { parseMPD, reloadMPD } from "./mpd";
import { initializeEME } from './drm';
import { getMedia } from "./utils";
import { NXTMediaTrack } from "./mediatrack"

class NXPlayer {
  options;
  currentRepresentationId;
  constructor(options) {
    this.options = options;
    this.currentRepresentationId = 0;
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
    var videoTrack = new NXTMediaTrack();
    var audioTrack = new NXTMediaTrack();
    var numberOfVideoChunks;
    var numberOfAudioChunks;
    var videoIndex = 0;
    var audioIndex = 0;
    var firstReload = true;
    var representationId =  this.currentRepresentationId;

    /** parse manifest by 'mpd-parser' */
    manifestData = await parseMPD(this.options.url);


    /** --- update manifest data --- **/
    /** start the reloading */
    setInterval(async () => {
      if (!firstReload) {
        console.log('=> => => [reloadManifest] start');
        manifestData = await reloadMPD(this.options.url);
        console.log('=> => => [reloadManifest] manifest reloaded');
        videoTrack.appendSegment(manifestData.playlists[representationId].segments);
        numberOfVideoChunks = videoTrack.segments.length;
        audioTrack.appendSegment(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
        numberOfAudioChunks = audioTrack.segments.length;
        console.log('=> => => [reloadManifest] end');
      }else {
        firstReload = false;
      }
    }, 10000);

    videoTrack.setAllSegments(manifestData.playlists[representationId].segments);
    numberOfVideoChunks = videoTrack.segments.length;
    audioTrack.setAllSegments(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
    numberOfAudioChunks = audioTrack.segments.length;
    console.log(
      '=> => => the first segment = ',
      manifestData.playlists[representationId].segments[0].timeline,
      manifestData.playlists[representationId].segments[0].uri
    );
    console.log(
      '=> => => the last segment = ',
      manifestData.playlists[representationId].segments[numberOfVideoChunks - 1].timeline,
      manifestData.playlists[representationId].segments[numberOfVideoChunks - 1].uri
    );

    // aws multi period
    var initSegment = manifestData.playlists[representationId].segments[0].map.resolvedUri;
    var audioInitSegment = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;

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
      videoSourceBuffer = mediaSource.addSourceBuffer(videoMimeType);
      videoSourceBuffer.mode = 'sequence';
      audioSourceBuffer = mediaSource.addSourceBuffer(audioMimeType);
      audioSourceBuffer.mode = 'sequence';
      videoSourceBuffer.addEventListener('updateend', nextSegment('video'));
      audioSourceBuffer.addEventListener('updateend', nextSegment('audio'));
      // aws multi period
      var initUrl = manifestData.playlists[representationId].segments[0].map.resolvedUri;
      var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
      getMedia(initUrl).then(appendToBuffer('video'));
      getMedia(audioInitUrl).then(appendToBuffer('audio'));
    }

    function nextSegment(type) {
      const sourcebuffer = type === 'video' ? videoSourceBuffer : audioSourceBuffer;
      return function () {
        // buffering controlling, if the buffered length is over 60s, stop the appending.
        if (video.buffered.length && video.buffered.end(0) - video.buffered.start(0) > 60) {
          console.log('=> => => [removeSourceBuffer] buffer is too big to append');
          return;
        }
        // append buffer data
        if (type === 'video') {
          // get the current video segment
          let currentVideoSegment = videoTrack.getSegment(videoIndex);
          // if the current segment is available, append it to the source buffer.
          if (currentVideoSegment) {
            if (currentVideoSegment.map.resolvedUri === initSegment) {
              getMedia(currentVideoSegment.resolvedUri).then(appendToBuffer(type));
              videoIndex++;
            } else {
              initSegment = currentVideoSegment.map.resolvedUri;
              getMedia(initSegment).then(appendToBuffer(type));
            }
          }
          if (videoIndex > numberOfVideoChunks) {
            sourcebuffer.removeEventListener('updateend', nextSegment);
          }
        } else {
          // get the current audio segment
          let currentAudioSegment = audioTrack.getSegment(audioIndex);
          // if the current segment is available, append it to the source buffer.
          if (currentAudioSegment) {
            if (currentAudioSegment.map.resolvedUri === audioInitSegment) {
              getMedia(currentAudioSegment.resolvedUri).then(appendToBuffer(type));
              audioIndex++;
            } else {
              audioInitSegment = currentAudioSegment.map.resolvedUri;
              getMedia(audioInitSegment).then(appendToBuffer(type));
            }
          }
          if (audioIndex > numberOfAudioChunks) {
            sourcebuffer.removeEventListener('updateend', nextSegment);
          }
        }
      };
    }

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
      if (video.buffered.length && video.buffered.end(0) - video.buffered.start(0) > 60) {
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
  }
}

export default NXPlayer;