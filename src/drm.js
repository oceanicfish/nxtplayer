const keySystems = {
  widevine: ['com.widevine.alpha'],
  playready: ['com.microsoft.playready', 'com.youtube.playready'],
  clearkey: ['webkit-org.w3.clearkey', 'org.w3.clearkey'],
  primetime: ['com.adobe.primetime', 'com.adobe.access'],
  fairplay: [
    'com.apple.fps',
    'com.apple.fps.1_0',
    'com.apple.fps.2_0',
    'com.apple.fps.3_0',
  ],
};

const config = [
  {
    initDataTypes: ['keyids', 'cenc'],
    videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.64001e"' }],
    audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a.40.2"' }],
  },
];

var video;
var licenseUrl;
var customData;
const requestHeaderKey = 'x-dt-custom-data';

async function getKey(challenge) {
  return new Promise(function (resolve) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', licenseUrl, true);
    xhr.setRequestHeader(requestHeaderKey, customData);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
      resolve(this.response);
    };
    xhr.send(challenge);
  });
}

async function generateLicense(message) {
  return new Promise(function (resolve) {
    var challenge = message;
    return getKey(challenge).then(function (key) {
      resolve(key);
    });
  });
}

async function creatKeySystem() {
  navigator
    .requestMediaKeySystemAccess(keySystems.widevine[0], config)
    .then(function (keySystemsAccess) {
      console.log('=> => => keySystemAccess: ', keySystemsAccess);
      return keySystemsAccess.createMediaKeys();
    })
    .then(function (createdMediaKeys) {
      console.log('=> => => createdMediaKeys', createdMediaKeys);
      video.setMediaKeys(createdMediaKeys);
    })
    .catch(function (err) {
      console.error('=> => => Failed to set up MediaKeys', err);
    });
}

async function initializeEME(drminfo) {
  video = document.querySelector('video');
  if (!drminfo) {
    return;
  }
  licenseUrl = drminfo.widevine.url;
  customData = drminfo.widevine.customData;
  await creatKeySystem();
  video.addEventListener('encrypted', onEncrypted, false);
}

function onEncrypted(event) {
  console.log('=> => => onEncrypted', event);
  if (!video.mediaKeys) {
    return;
  }
  var session = video.mediaKeys.createSession();
  session.addEventListener('message', onMessage, false);
  session
    .generateRequest(event.initDataType, event.initData)
    .catch(function (err) {
      console.error('=> => => Failed to request license request', err);
    });
}

async function onMessage(event) {
  console.log('=> => => onMessage', event);
  generateLicense(event.message).then(function (license) {
    console.log('=> => => license: ', license);
    var session = event.target;
    session.update(license).catch(function (err) {
      console.error('=> => => Failed to update the session: ', err);
    });
  });
}

export { initializeEME };
