import { parseMPD, reloadMPD } from "./mpd";
import { setupEME } from "./drm";
import { sleep, getMedia } from "./utils";
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
    
    /** --- update manifest data --- **/
    // const startReloadingLoop = async () => {
    //   var startTime = new Date().getTime();
    //   while (true) {
    //     var fetchTime = new Date().getTime();
    //     if (new Date().getTime() - startTime >= 2000) {
    //       console.log('reload manifest...');
    //       manifestData = await reloadMPD();
    //       console.log('manifest reloaded.');
    //       numberOfVideoChunks = manifestData.playlists[0].segments.length;
    //       numberOfAudioChunks = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments.length;
    //       startTime = fetchTime;
    //     }
    //     sleep(100);
    //   }
    // };
    // startReloadingLoop();
    
    /** parse manifest by 'mpd-parser' */
    let manifestData = await parseMPD();

    var videoTrack = new NXTMediaTrack();
    videoTrack.setAllSegments(manifestData.playlists[0].segments);
    let numberOfVideoChunks = videoTrack.segments.length;

    var audioTrack = new NXTMediaTrack();
    audioTrack.setAllSegments(manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments);
    let numberOfAudioChunks = audioTrack.segments.length;

    // aws multi period
    var initUrl = manifestData.playlists[0].segments[0].map.resolvedUri;
    // tears widevine test
    // var initUrl = manifestData.playlists[0].sidx.uri
    var initSegment = initUrl;

    // aws multi period
    var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
    // tears widevine test
    // var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].sidx.uri;
    var audioInitSegment = audioInitUrl;
    // var initUrl = baseUrl + manifestData.playlists[0].segments[0].map.uri;

    /** get video element under control */
    const video = document.querySelector("video");
    // const video = this.video;

    /** check if the browser supports MSE or not */
    if (!window.MediaSource) {
      console.error("No Media Source API available");
      return;
    }

    /** create MSE instance */
    let mediaSource = new MediaSource();
    video.src = window.URL.createObjectURL(mediaSource);

    // Log events dispatched to make debugging easier...
    [ "canplay", "canplaythrough", "encrypted", "ended", "error", "loadeddata",
      "loadedmetadata", "loadstart", "pause", "play", "playing", "progress",
      "stalled", "suspend", "waiting",
    ].forEach(function (e) {
      video.addEventListener(e, function(event) {
        console.log("EVENT: " + e);
      }, false);
    });

    let videoMimeType = 'video/mp4; codecs="avc1.64001e"';
    let audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

    /** Add callback function [onMediaSourceOpen]  */
    mediaSource.addEventListener("sourceopen", onMediaSourceOpen);
    video.addEventListener('canplay', function() {
      video.play();
    });

    /**
    * Setup EME Options
    */
    // var emeOptions;
    // if (typeof(MediaKeySystemAccess.prototype.getConfiguration) == "undefined") {
    //   // Firefox 43 and earlier used a different style of defining configurations
    //   // for navigator.requestMediaKeySystem that doesn't match the current spec.
    //   log("Detected obsolete navigator.requestMediaKeySystem options style.");
    //   emeOptions = [
    //     {
    //       initDataType: "cenc",
    //       videoType: videoMimeType,
    //       audioType: audioMimeType
    //     }
    //   ];
    // } else {
    //   emeOptions = [
    //     {
    //       initDataTypes: ['keyids','cenc'],
    //       videoCapabilities: [{contentType: videoMimeType}],
    //       audioCapabilities: [{contentType: audioMimeType}],
    //     }
    //   ];
    // }

    /**
    * Initialize Encrypted Media Extention
    */
    // setupEME(video, keySystems.widevine[0], emeOptions);

    /**
    * 
    */
    function onMediaSourceOpen() {

      videoSrcBuffer = mediaSource.addSourceBuffer(videoMimeType);
      videoSrcBuffer.mode = 'sequence';
      
      audioSrcBuffer = mediaSource.addSourceBuffer(audioMimeType);
      audioSrcBuffer.mode = 'sequence';

      videoSrcBuffer.addEventListener("updateend", nextSegment("video"));
      audioSrcBuffer.addEventListener("updateend", nextSegment("audio"));

      // aws multi period
      var initUrl = manifestData.playlists[0].segments[0].map.resolvedUri;
      // tears widevine test
      // var initUrl = manifestData.playlists[0].sidx.uri
      var initSegment = initUrl;

      // aws multi period
      var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
      // tears widevine test
      // var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].sidx.uri;
      var audioInitSegment = audioInitUrl;
      // var initUrl = baseUrl + manifestData.playlists[0].segments[0].map.uri;

      getMedia(initUrl).then(appendToBuffer("video"));
      getMedia(audioInitUrl).then(appendToBuffer("audio"));
    }

    function nextSegment(type) {
      let videoIndex = 0;
      let audioIndex = 0;
      // const tmpUrl = type === "video" ? templateUrl : audioTmpUrl;
      const sourcebuffer = type === "video" ? videoSrcBuffer : audioSrcBuffer;
      return function () {

        if (manifestData.playlists[0].segments.length === 0) { 
          sourcebuffer.removeEventListener("updateend", nextSegment);
          return;
        }

        if (type === "video") {
          const segmentUrl = videoTrack.getSegmentUrl(videoIndex);
          console.log('segmentUrl >>> ', segmentUrl);
          
          if (videoTrack.getSegment(videoIndex).map.resolvedUri === initSegment) {
            getMedia(segmentUrl).then(appendToBuffer(type));
            videoIndex++;
          } else {
            initSegment = manifestData.playlists[0].segments[videoIndex].map.resolvedUri;
            getMedia(initSegment).then(appendToBuffer(type));
          }
          // const segmentUrl = baseUrl + manifestData.playlists[0].segments[index].uri;
          
          if (videoIndex > numberOfVideoChunks) {
            sourcebuffer.removeEventListener("updateend", nextSegment);
          }
        } else {
          const audioSegmentUrl = audioTrack.getSegmentUrl(audioIndex);
          console.log('audioSegmentUrl >>> ', audioSegmentUrl);
          if (audioTrack.getSegment(audioIndex).map.resolvedUri === audioInitSegment) {
            getMedia(audioSegmentUrl).then(appendToBuffer(type));
            audioIndex++;
          } else {
            audioInitSegment = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[audioIndex].map.resolvedUri;
            getMedia(audioInitSegment).then(appendToBuffer(type));
          }
          
          if (audioIndex > numberOfAudioChunks) {
            sourcebuffer.removeEventListener("updateend", nextSegment);
          }
        }
        
      };
    }

    function appendToBuffer(type) {
      const sourcebuffer = type === "video" ? videoSrcBuffer : audioSrcBuffer;
      return function (chunk, error) {
        if (error && mediaSource.readyState === "open") {
          mediaSource.endOfStream();
          return;
        }

        if (chunk) {
          sourcebuffer.appendBuffer(new Uint8Array(chunk));
        }
      };
    }
  }
}

export default NXPlayer;