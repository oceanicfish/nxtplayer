import parseMPD from "./mpd";

const video = document.querySelector("video");
var mediaSource = new MediaSource();

/**
* start to load buffer with MSE
* @param {*} mediaSource 
* @param {*} segments 
* @returns 
*/
function LoadBuffer(sourceBuffer, segements) {
    return new Promise(function(resolve, reject){
        // var sourceBuffer;
        var index = 0;

        function loadNext() {
            if (mediaSource.readyState == 'close') {
                reject(new Error('MediaSource state is closed'));
                return;
            }

            /**
            * segement's length always decided by audio's segements. 
            */
            if (index >= segements.length) {
                resolve();
                return;
            }

            var segement =　'https://dash.akamaized.net/akamai/bbb_30fps/' + segements[index];
            
            index = index + 1;

            fetchBuffer(segement)
            .then(function(buffer){
                sourceBuffer.appendBuffer(new Uint8Array(buffer));
            }).catch(function(Error){
                console.log(Error);
            });
        }

        function fetchBuffer(url) {
            return new Promise(function(resolve, reject){
                var xhr = new XMLHttpRequest;
                xhr.open('get', url);
                xhr.responseType = 'arraybuffer';
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function () {
                    reject(new Error('request failed'));
                }
                xhr.send();
            });
        }

        // sourceBuffer = mediaSource.addSourceBuffer(type);
        sourceBuffer.addEventListener("updateend", loadNext);
        loadNext();
    });
}

/**
 * playback start function
 * @param {*} media 
 */
async function startPlaying() {
    // var videoMimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
    // var audioMimeType = 'audio/mp4; codecs="mp4a.40.2"';

    video.src = window.URL.createObjectURL(mediaSource);

    // /*************************** parse manifest ****************************************/
    // var segements = [];
    // var manifestData = await parseMPD();
    // // add init segment
    // segements.push(manifestData.playlists[0].segments[0].map.resolvedUri);
    // // add normal segment
    // for (var i = 0; i < manifestData.playlists[0].segments.length; i++) {
    //   segements.push(manifestData.playlists[0].segments[i].resolvedUri);
    // }
    // /*************************** parse manifest ****************************************/

    var sourceOpen = async function(e) {
        mediaSource.removeEventListener('sourceopen', sourceOpen);
        var videoMimeType = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        var videoSourceBuffer = mediaSource.addSourceBuffer(videoMimeType);
        /*************************** parse manifest ****************************************/
        var segements = [];
        var manifestData = await parseMPD();
        // add init segment
        segements.push(manifestData.playlists[0].segments[0].map.uri);
        // add normal segment
        for (var i = 0; i < manifestData.playlists[0].segments.length; i++) {
          // segements.push(manifestData.playlists[0].segments[i].resolvedUri);
          segements.push(manifestData.playlists[0].segments[i].uri);
        }
        /*************************** parse manifest ****************************************/
        Promise.all([LoadBuffer(videoSourceBuffer, segements)])
            .then(function() {
                mediaSource.endOfStream();
            });
    }

    mediaSource.addEventListener('sourceopen', sourceOpen);
    video.addEventListener('canplay', function(){
        video.play();
    });
}

startPlaying();