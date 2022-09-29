import { sleep } from "./utils";

const EventEmitter = require('events');

export class PlaybackController {
  video; // video element
  gapWatchingJob;
  
  constructor(nxtPlayer) {
    this.video = nxtPlayer.video;
  }

  async start() {
    this.gapWatchingJob =  setInterval(() =>{
      let currentTime = this.video.currentTime;
      console.log('(playbackcontroller.js) => => => this.video.buffered.length = ', this.video.buffered.length, ', this.video.buffered.end(0) = ', this.video.buffered.end(0));
      for (var i = 0; i < this.video.buffered.length; i++ ) {
        if (this.video.buffered.end(i) > currentTime 
            && this.video.buffered.end(i) - currentTime < 0.05) {
              // if ((i + 1) < this.video.buffered.length) {
                this.video.currentTime = this.video.buffered.start(i + 1) + 0.01;
                console.warn('(playbackcontroller.js) => => => Gap Jumped, From (', this.video.buffered.end(i), '), to (', this.video.currentTime, ')');
              // }
        }
      }
    }, 50);
  }
}