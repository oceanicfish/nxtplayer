
// function createMediaKeys(keySystem, config) {
//   return new Promise(function(resolve, reject) {
//     if (!video.webkitKeys) {
//       try {
//           // for Safari only
//           var mediakey = new window.WebKitMediaKeys(keySystem);
//           video.webkitSetMediaKeys(mediakey);

//       }catch(error) {
//           reject(error);
//           return;
//       }
//     }
//   });
// }

const keySystems = {
    widevine: ['com.widevine.alpha'],
    playready: ['com.microsoft.playready', 'com.youtube.playready'],
    clearkey: ['webkit-org.w3.clearkey', 'org.w3.clearkey'],
    primetime: ['com.adobe.primetime', 'com.adobe.access'],
    fairplay: ['com.apple.fps', 'com.apple.fps.1_0', 'com.apple.fps.2_0', 'com.apple.fps.3_0']
};

var ensurePromise;
var session;

/**
 * createMediaKeys
 * @param {*} video 
 * @param {*} keySystem 
 * @param {*} config 
 * @returns 
 */
function createMediaKeys(video, keySystem, config) {
    if (ensurePromise) {
        return ensurePromise;
    }
    ensurePromise = navigator.requestMediaKeySystemAccess(keySystem, config)
        .then(function(keySystemAccess){
            var mediaKeys = keySystemAccess.createMediaKeys();
            video.mediaKeysObject = mediaKeys;
            return mediaKeys;
        }).then(function(mediaKeys){
            video.mediaKeysObject = mediaKeys;
            // if (serverCertification) {
            //   mediaKeys.setServerCertificate(serverCertification);
            // }
            return video.setMediaKeys(mediaKeys);
        });
    return ensurePromise;
}

function licenseRequestReady(event) {
  if (event === undefined) {
    return;
  }
  var request = event.message;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.keySession = event.target;
  xmlhttp.responseType = 'arraybuffer';
  const licenseUrl = "https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true";
  const customData = 'ewogICAgInVzZXJJZCI6ICJhd3MtZWxlbWVudGFsOjpzcGVrZS10ZXN0aW5nIiwKICAgICJzZXNzaW9uSWQiOiAiZWxlbWVudGFsLXJlZnN0cmVhbSIsCiAgICAibWVyY2hhbnQiOiAiYXdzLWVsZW1lbnRhbCIKfQo=';
  xmlhttp.open("POST", licenseUrl);
  xmlhttp.setRequestHeader("x-dt-custom-data", customData);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      var license = new Uint8Array(xmlhttp.response);
      try {
        // session.update(license);
        xmlhttp.keySession.update(license);
      } catch(error) {
        console.log('xmlhttp.keySession.update Error: ', error);
        console.error.bind(console, 'update() failed')
      }
    }
  }
  xmlhttp.send(request);
}

/**
 * setup EME
 * @param {*} keySystem 
 * @param {*} config 
 */
function setupEME(video, keySystem, config) {
    video.session = [];
    video.addEventListener('encrypted', function(encryptedEvent){
        console.log(encryptedEvent);
        console.log('initDataType ===> ', encryptedEvent.initDataType);
        console.log('initData ===> ', encryptedEvent.initData);

        // if (video.mediaKeysObject === undefined) {
        //   video.mediaKeysObject = null; // Prevent entering this path again.
        //   video.pendingSessionData = [];
        // }

        createMediaKeys(video, keySystem, config).then(function(){
            
            // var session = video.mediaKeys.createSession('com.widevine.alpha', encryptedEvent.initData);
            session = video.mediaKeys.createSession();
            video.session.push(session);
            session.addEventListener('message', licenseRequestReady(event), false);
            session.addEventListener('keystatuschange', function() {
              console.log('keystatuschange ===> ');
            });
            //For safari event 'webkitkeymessage'.
            // session.addEventListener('webkitkeymessage', webkitUpdateSession);
            session.generateRequest(encryptedEvent.initDataType, encryptedEvent.initData)
            .then(function () {
                console.log('EME setup completed');
                return true;
            }).catch(function(error) {
                console.log(error.message);
                console.log(error.stack);
                return false;
            });
        });
        
    });
}

export {setupEME};