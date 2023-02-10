import { Fairplay } from './drm/fairplay';

const EventEmitter = require('events');

export class NativePlayer {

    options;
    video;

    constructor(options) {
        this.options = options;
        this.video = this.options.video;
        this.video.src = this.options.url;
        console.log(" Native Player has been initialized. ");
        console.log(" url = ", this.options.url);
    }

    async play() {

        // let drm = new Fairplay(this);
        // await drm.initialize();

        this.video.play();
    }
}