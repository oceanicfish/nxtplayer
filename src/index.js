import {parseMPD, reloadMPD} from "./mpd";
import { setupEME } from "./eme";

const baseUrl = 'https://dash.akamaized.net/dash264/TestCases/5a/nomor/';
var manifestData;
var initSegment;
var audioInitSegment;
var numberOfVideoChunks;
var numberOfAudioChunks;

const keySystems = {
    widevine: ['com.widevine.alpha'],
    playready: ['com.microsoft.playready', 'com.youtube.playready'],
    clearkey: ['webkit-org.w3.clearkey', 'org.w3.clearkey'],
    primetime: ['com.adobe.primetime', 'com.adobe.access'],
    fairplay: ['com.apple.fps', 'com.apple.fps.1_0', 'com.apple.fps.2_0', 'com.apple.fps.3_0']
};

const videoMimeType = 'video/mp4; codecs="avc1.64001e"';
const audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getMedia(url) {
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.warn("Unexpected status code " + res.status + " for " + url);
        throw res;
      }
      return res.arrayBuffer();
    })
    .catch((err) => console.dir(err));
}

async function init() {
  /** pre-define sourceBuffer */
  let videoSrcBuffer;
  let audioSrcBuffer;
  
  /** --- update manifest data --- **/
  // const startReloadingLoop = async () => {
  //   var startTime = new Date().getTime();
  //   while (true) {
  //     var fetchTime = new Date().getTime();
  //     if (new Date().getTime() - startTime >= 3000) {
  //       manifestData = await reloadMPD();
  //       numberOfVideoChunks = manifestData.playlists[0].segments.length;
  //       numberOfAudioChunks = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments.length;
  //       startTime = fetchTime;
  //     }
  //     sleep(500);
  //   }
  // };
  // startReloadingLoop();
  
  /** parse manifest by 'mpd-parser' */
  manifestData = await parseMPD();
  // numberOfVideoChunks = manifestData.playlists[0].segments.length;
  // numberOfAudioChunks = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments.length;
  // numberOfAudioChunks = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].segments.length;

  // tears widevine
  numberOfVideoChunks = 1;
  numberOfAudioChunks = 1;

  /** get video element under control */
  const video = document.querySelector("video");

  /** check if the browser supports MSE or not */
  if (!window.MediaSource) {
    console.error("No Media Source API available");
    return;
  }

  /** create MSE instance */
  let ms = new MediaSource();
  video.src = window.URL.createObjectURL(ms);

  // Log events dispatched to make debugging easier...
  [ "canplay", "canplaythrough", "encrypted", "ended", "error", "loadeddata",
    "loadedmetadata", "loadstart", "pause", "play", "playing", "progress",
    "stalled", "suspend", "waiting",
  ].forEach(function (e) {
    video.addEventListener(e, function(event) {
      console.log("EVENT: " + e);
    }, false);
  });

  
  ms.addEventListener("sourceopen", onMediaSourceOpen);
  video.addEventListener('canplay', function() {
    video.play();
  });

  var emeOptions;
  if (typeof(MediaKeySystemAccess.prototype.getConfiguration) == "undefined") {
    // Firefox 43 and earlier used a different style of defining configurations
    // for navigator.requestMediaKeySystem that doesn't match the current spec.
    log("Detected obsolete navigator.requestMediaKeySystem options style.");
    emeOptions = [
      {
        initDataType: "cenc",
        videoType: videoMimeType,
        audioType: audioMimeType
      }
    ];
  } else {
    emeOptions = [
      {
        initDataTypes: ['keyids','cenc'],
        videoCapabilities: [{contentType: videoMimeType}],
        audioCapabilities: [{contentType: audioMimeType}],
      }
    ];
  }

  setupEME(video, keySystems.widevine[0], emeOptions);

  function onMediaSourceOpen() {

    videoSrcBuffer = ms.addSourceBuffer(videoMimeType);
    videoSrcBuffer.mode = 'sequence';
    
    audioSrcBuffer = ms.addSourceBuffer(audioMimeType);
    audioSrcBuffer.mode = 'sequence';

    videoSrcBuffer.addEventListener("updateend", nextSegment("video"));
    audioSrcBuffer.addEventListener("updateend", nextSegment("audio"));

    // aws multi period
    var initUrl = manifestData.playlists[0].segments[0].map.resolvedUri;
    // tears widevine test
    // var initUrl = manifestData.playlists[0].sidx.uri
    initSegment = initUrl;

    // aws multi period
    var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[0].map.resolvedUri;
    // tears widevine test
    // var audioInitUrl = manifestData.mediaGroups.AUDIO.audio.en.playlists[0].sidx.uri;
    audioInitSegment = audioInitUrl;
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
        const segmentUrl = manifestData.playlists[0].segments[videoIndex].resolvedUri;
        if (manifestData.playlists[0].segments[videoIndex].map.resolvedUri === initSegment) {
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
        const audioSegmentUrl = manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[audioIndex].resolvedUri;
        if (manifestData.mediaGroups.AUDIO.audio.eng.playlists[0].segments[audioIndex].map.resolvedUri === audioInitSegment) {
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
      if (error && ms.readyState === "open") {
        ms.endOfStream();
        return;
      }

      if (chunk) {
        sourcebuffer.appendBuffer(new Uint8Array(chunk));
      }
    };
  }
}

init();