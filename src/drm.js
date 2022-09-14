export class DRM {

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

  video;
  drminfo;
  licenseUrl;
  customData;
  requestHeaderKey = 'AcquireLicenseAssertion';

  license;
  drmSession;

  constructor(nxtPlayer) {
    this.video = nxtPlayer.video;
    this.drminfo = nxtPlayer.options.drm;
    this.licenseUrl = this.drminfo.widevine.url;
    this.customData = this.drminfo.widevine.customData;
  }

  async creatKeySystem() {
    navigator
      .requestMediaKeySystemAccess(this.keySystems.widevine[0], this.config)
      .then(function (keySystemsAccess) {
        console.log('=> => => keySystemAccess: ', keySystemsAccess);
        return keySystemsAccess.createMediaKeys();
      })
      .then(function (createdMediaKeys) {
        console.log('=> => => createdMediaKeys', createdMediaKeys);
        let videoObject = window.document.getElementById('video');
        videoObject.setMediaKeys(createdMediaKeys);
      })
      .catch(function (err) {
        console.error('=> => => Failed to set up MediaKeys', err);
      });
  }

  async initializeEME() {
    if (this.drminfo.widevine.customDataHeaderKey 
          && this.drminfo.widevine.customDataHeaderKey.length > 0) {
      this.requestHeaderKey = this.drminfo.widevine.customDataHeaderKey;
    }
    await this.creatKeySystem();
    this.video.addEventListener('encrypted', this.onEncrypted.bind(this));
  }

  onEncrypted(event) {
    // console.log('=> => => onEncrypted', event);
    if (!this.video.mediaKeys) {
      return;
    }
    if (!this.drmSession) {
      this.drmSession = this.video.mediaKeys.createSession();
      this.drmSession.addEventListener('message', this.onMessage.bind(this));
      this.drmSession.generateRequest(event.initDataType, event.initData)
      .catch(function (err) {
        console.error('=> => => Failed to request license request', err);
      });
    }
    // this.drmSession.generateRequest(event.initDataType, event.initData)
    // .catch(function (err) {
    //   console.error('=> => => Failed to request license request', err);
    // });
  }

  async onMessage(event) {
    // console.log('=> => => onMessage', event);

    // if (this.license) {
    //   // var session = event.target;
    //   // session.update(license)
    //   // .catch(function (err) {
    //   //   console.error('=> => => Failed to update the session: ', err);
    //   // });
    //   console.log('(drm.js)=> => => license is exist');
    //   return;
    // } else {
    //   let xhr = new XMLHttpRequest();
    //   xhr.open('POST', this.licenseUrl);
    //   xhr.setRequestHeader(this.requestHeaderKey, this.customData);
    //   xhr.responseType = 'arraybuffer';
    //   xhr.onload = function (event) {
    //     this.updateLicense(event.target.response);
    //   }.bind(this);
    //   xhr.send(event.message);
    // }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', this.licenseUrl);
    xhr.setRequestHeader(this.requestHeaderKey, this.customData);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (event) {
      this.updateLicense(event.target.response);
    }.bind(this);
    xhr.send(event.message);
  }

  updateLicense(response) {
    this.license = response;
    this.drmSession.update(response)
    .catch((error) => {
      console.error('=> => => Failed to update the session: ', error);
    });
  }

  // this.generateLicense(event.message).then(function (license) {
  //       // console.log('=> => => license: ', license);
  //       this.license = license;
  //       let session = event.target;
  //       session.update(license).catch(function (err) {
  //         console.error('=> => => Failed to update the session: ', err);
  //       });
  //     });

  // async generateLicense(message) {
  //   return new Promise(function (resolve) {
  //     let challenge = message;
  //     console.log('(drm.js) => => => get key with message = ', message);
  //     return this.getKey(challenge).then(function (key) {
  //       resolve(key);
  //     });
  //   });
  // }

  // async getKey(challenge) {
  //   return new Promise(function (resolve) {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open('POST', this.licenseUrl, true);
  //     xhr.setRequestHeader(this.requestHeaderKey, this.customData);
  //     xhr.responseType = 'arraybuffer';
  //     xhr.onload = function () {
  //       console.log('(drm.js) => => => license acquired @ ', Date.now());
  //       resolve(this.response);
  //     };
  //     console.log('(drm.js) => => => acquire license... @ ', Date.now());
  //     xhr.send(challenge);
  //   });
  // }

}