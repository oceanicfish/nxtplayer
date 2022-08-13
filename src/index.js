import { parseMPD, reloadMPD } from "./mpd";
import { initializeEME } from './drm';
import { getMedia } from "./utils";
import { NXTMediaTrack } from "./mediatrack"

class NXPlayer {
  options;
  constructor(options) {
    this.options = options;
  }

  /**
   * The main entrance of nxtPlayer
   * @returns
   */
  async play() {
    /** pre-define sourceBuffer */
    let videoSrcBuffer;
    let audioSrcBuffer;
    var manifestData;
    var videoTrack = new NXTMediaTrack();
    var audioTrack = new NXTMediaTrack();
    var numberOfVideoChunks;
    var numberOfAudioChunks;
    var videoIndex = 0;
    var audioIndex = 0;
    var firstReload = true;

    /** parse manifest by 'mpd-parser' */
    manifestData = await parseMPD(this.options.url);

    /** --- update manifest data --- **/
    /** start the reloading */
    setInterval(async () => {
      if (!firstReload) {
        console.log('=> => => [reloadManifest] start');
        manifestData = await reloadMPD(this.options.url);
        console.log('=> => => [reloadManifest] manifest reloaded');
        videoTrack.appendSegment(manifestData.playlists[0].segments);
        numberOfVideoChunks = videoTrack.segments.length;
        audioTrack.appendSegment(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
        numberOfAudioChunks = audioTrack.segments.length;
        console.log('=> => => [reloadManifest] end');
      }else {
        firstReload = false;
      }
    }, 10000);

    videoTrack.setAllSegments(manifestData.playlists[0].segments);
    numberOfVideoChunks = videoTrack.segments.length;
    audioTrack.setAllSegments(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
    numberOfAudioChunks = audioTrack.segments.length;
    console.log(
      '=> => => the first segment = ',
      manifestData.playlists[0].segments[0].timeline,
      manifestData.playlists[0].segments[0].uri
    );
    console.log(
      '=> => => the last segment = ',
      manifestData.playlists[0].segments[numberOfVideoChunks - 1].timeline,
      manifestData.playlists[0].segments[numberOfVideoChunks - 1].uri
    );

    // aws multi period
    var initSegment = manifestData.playlists[0].segments[0].map.resolvedUri;
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
    video.addEventListener('canplay', function () {
      video.play();
    });
    // --- timeupdate --- //
    // video.addEventListener('timeupdate', function () {
    //   console.log('=> => => [timeupdate] currentTime = ', video.currentTime);
    //   videoSrcBuffer.remove(0, parseInt(video.currentTime));
    //   audioSrcBuffer.remove(0, parseInt(video.currentTime));
    //   console.log('=> => => [timeupdate] source buffer removed.');
    // });
    // --- waiting --- //
    // video.addEventListener('waiting', function() {
    //   console.log('=> => => video event = waiting ');
    //   console.log('=> => => video.buffered: ', video.buffered);
    //   // video.play();
    // });
    // --- stalled --- //
    // video.addEventListener('stalled', function() {
    //   console.log('=> => => video event = stalled ');
    //   console.log('=> => => video.buffered: ', video.buffered);
    //   // video.play();
    // });
    // --- waitingforkey --- //
    // video.addEventListener('waitingforkey', function(event) {
    //   console.log('=> => => waitingforkey: ', event);
    //   console.log('=> => => mediasource.readyState: ', mediaSource.readyState);
    // });

    initializeEME(this.options.drm);
    /**
     *
     */
    function onMediaSourceOpen() {
      videoSrcBuffer = mediaSource.addSourceBuffer(videoMimeType);
      videoSrcBuffer.mode = 'sequence';
      audioSrcBuffer = mediaSource.addSourceBuffer(audioMimeType);
      audioSrcBuffer.mode = 'sequence';
      videoSrcBuffer.addEventListener('updateend', nextSegment('video'));
      audioSrcBuffer.addEventListener('updateend', nextSegment('audio'));
      // aws multi period
      var initUrl = manifestData.playlists[0].segments[0].map.resolvedUri;
      var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
      getMedia(initUrl).then(appendToBuffer('video'));
      getMedia(audioInitUrl).then(appendToBuffer('audio'));
    }

    function nextSegment(type) {
      const sourcebuffer = type === 'video' ? videoSrcBuffer : audioSrcBuffer;
      return function () {
        if (video.buffered.length && video.buffered.end(0) - video.buffered.start(0) > 30) {
          console.log('=> => => [removeSourceBuffer] buffer is too big to append');
          return;
        }

        if (manifestData.playlists[0].segments.length === 0) {
          sourcebuffer.removeEventListener('updateend', nextSegment);
          return;
        }
        if (type === 'video') {
          var segmentUrl = videoTrack.getSegmentUrl(videoIndex);
          if (!segmentUrl) {
            return;
          }
          if (videoTrack.getSegment(videoIndex)) {
            if (videoTrack.getSegment(videoIndex).map.resolvedUri === initSegment) {
              // removeSourceBuffer(sourcebuffer);
              getMedia(segmentUrl).then(appendToBuffer(type));
              // videoTrack.removeSegment(videoIndex);
              videoIndex++;
            } else {
              initSegment = videoTrack.getSegment(videoIndex).map.resolvedUri;
              getMedia(initSegment).then(appendToBuffer(type));
            }
          }
          if (videoIndex > numberOfVideoChunks) {
            sourcebuffer.removeEventListener('updateend', nextSegment);
          }
        } else {
          const audioSegmentUrl = audioTrack.getSegmentUrl(audioIndex);
          if (!audioSegmentUrl) {
            return;
          }
          if (audioTrack.getSegment(audioIndex)) {
            if (audioTrack.getSegment(audioIndex).map.resolvedUri === audioInitSegment) {
              // removeSourceBuffer(sourcebuffer);
              getMedia(audioSegmentUrl).then(appendToBuffer(type));
              // audioTrack.removeSegment(audioIndex);
              audioIndex++;
            } else {
              audioInitSegment = audioTrack.getSegment(audioIndex).map.resolvedUri;
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
      const sourcebuffer = type === 'video' ? videoSrcBuffer : audioSrcBuffer;
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
      if (video.buffered.length && video.buffered.end(0) - video.buffered.start(0) > 30) {
        console.log(
          '=> => => [removeSourceBuffer] start = ',
          video.buffered.start(0),
          ', end = ',
          video.buffered.end(0),
          ', video.currentTime = ',
          video.currentTime
        );
        if (video.currentTime - 10 > 0) {
          videoSrcBuffer.remove(0, video.currentTime - 10);
          audioSrcBuffer.remove(0, video.currentTime - 10);
          console.log('=> => => [removeSourceBuffer] source buffer removed.');
        }
      }
    }, 1000);
  }
}

export default NXPlayer;