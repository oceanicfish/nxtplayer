export class Playready {

  keySystems = {
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

  config = [
    {
      initDataTypes: ['keyids', 'cenc'],
      videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.64001e"' }],
      audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a.40.2"' }],
    },
  ];

  msprconfig = [
    {
      initDataTypes: ['cenc'],
      videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.64001e"' }],
      audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a.40.2"' }],
    },
  ];

  video;
  drminfo;
  licenseUrl;
  customData;
  requestHeaderKey = 'AcquireLicenseAssertion';

  license;
  drmSession;

  constructor(nxtPlayer) {
    this.video = nxtPlayer.video;
    if (nxtPlayer.options.drm) {
      this.drminfo = nxtPlayer.options.drm;
      this.licenseUrl = this.drminfo.widevine.url;
      this.customData = this.drminfo.widevine.customData;
    }
  }

  async creatKeySystem() {
    navigator
      .requestMediaKeySystemAccess(this.keySystems.playready[0], this.msprconfig)
      .then(function (keySystemsAccess) {
        console.log('(drm.js) => => => keySystemAccess: ', keySystemsAccess);
        return keySystemsAccess.createMediaKeys();
      })
      .then(function (createdMediaKeys) {
        console.log('(drm.js) => => => createdMediaKeys', createdMediaKeys);
        let videoObject = window.document.getElementById('video');
        videoObject.setMediaKeys(createdMediaKeys);
      })
      .catch(function (err) {
        console.error('(drm.js) => => => Failed to set up MediaKeys', err);
      });
  }

  async initializeEME() {
    if (this.drminfo 
          && this.drminfo.widevine.customDataHeaderKey 
          && this.drminfo.widevine.customDataHeaderKey.length > 0) {
      this.requestHeaderKey = this.drminfo.widevine.customDataHeaderKey;
    }
    await this.creatKeySystem();
    this.video.addEventListener('encrypted', this.onEncrypted.bind(this));
  }

  onEncrypted(event) {
    // console.log('(drm.js) => => => onEncrypted', event);
    if (!this.video.mediaKeys) {
      return;
    }
    if (!this.drmSession) {
      this.drmSession = this.video.mediaKeys.createSession();
      this.drmSession.addEventListener('message', this.onMessage.bind(this));
      this.drmSession.addEventListener('keystatuseschange', this.onKeyStatusesChange.bind(this));
      this.drmSession.generateRequest(event.initDataType, event.initData)
      .catch(function (err) {
        console.error('(drm.js) => => => Failed to request license request', err);
      });
    }
  }

  async onMessage(event) {
    console.log('(drm.js) => => => message type = ', event.messageType);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', this.licenseUrl);
    let messageContent = getMessageContents(event.message);
    xhr.setRequestHeader(this.requestHeaderKey, this.customData);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (event) {
      this.updateLicense(event.target.response);
    }.bind(this);
    xhr.send(messageContent);
  }

  updateLicense(response) {
    this.license = response;
    this.drmSession.update(response)
    .catch((error) => {
      console.error('(drm.js) => => => Failed to update the session: ', error);
    });
  }

  async onKeyStatusesChange(event) {
    console.log('(drm.js) => => => session key status = ', this.drmSession.keyStatuses);
    this.drmSession.keyStatuses.forEach((status, keyId) => {
      console.log('(drm.js) => => => keyId = ', keyId, ', status = ', status);
    });
  }

  getMessageContents(message) {
    // TODO do we want to support UTF-8?
    const xmlString = String.fromCharCode.apply(null, new Uint16Array(message));
    const xml = (new window.DOMParser())
      .parseFromString(xmlString, 'application/xml');
    const headersElement = xml.getElementsByTagName('HttpHeaders')[0];
    const headers = {};
  
    if (headersElement) {
      const headerNames = headersElement.getElementsByTagName('name');
      const headerValues = headersElement.getElementsByTagName('value');
  
      for (let i = 0; i < headerNames.length; i++) {
        headers[headerNames[i].childNodes[0].nodeValue] =
          headerValues[i].childNodes[0].nodeValue;
      }
    }
  
    const challengeElement = xml.getElementsByTagName('Challenge')[0];
    let challenge;
  
    if (challengeElement) {
      challenge = window.atob(challengeElement.childNodes[0].nodeValue);
    }
  
    return {
      headers,
      message: challenge
    };
  };

}