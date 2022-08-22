export class NXTMediaTrack {
  type;
  segments = [];
  representations = [];
  representationId = 0;
  bufferQueue = [];
  targetBufferLength = 60;
  bufferedLength = 0;
  currentSegmentNumber = 0;
  status = 0; // 0: normal, 1: wait, 2: stopped...
  initSegmentUri;

  constructor(type, player) {
    this.type = type;
    this.segments = [];
    this.representations = [];
    this.representationId = 0;
    this.bufferQueue = [];
    this.targetBufferLength = 60;
    this.bufferedLength = 0;
    this.currentSegmentNumber = 0;
    this.status = 0;
    this.initSegmentUri = null;
  }

  async prepare(representations) {
    this.bufferedLength = 0;
    this.representations = representations;
    await this.startBuffering();
  }

  async startBuffering() {
    while (this.bufferedLength <= this.targetBufferLength) {
      var s = this.getSegmentByNumber(this.currentSegmentNumber);
      if (this.initSegmentUri && s.map.resolvedUri === this.initSegmentUri) {
        let response = await fetch(s.resolvedUri);
        if (response.status === 200) {
          let buffer = await response.arrayBuffer();
          this.bufferQueue.push({
            url: s.resolvedUri,
            buffer: buffer
          });
          console.log('(mediatrack.js) >>> [fetched] => => => segment = ', s.resolvedUri);
          this.bufferedLength = this.bufferedLength + s.duration;
          this.currentSegmentNumber++;
        }else {
          console.error('(mediatrack.js) >>> [fetching failed] => => => segment = ', s.resolvedUri);
        }
      } else {
        this.initSegmentUri = this.getInitSegment(s);
        let response = await fetch(this.initSegmentUri);
        if (response.status === 200) {
          let buffer = await response.arrayBuffer();
          this.bufferQueue.push({
            url: this.initSegmentUri,
            buffer: buffer
          });
          console.log('(mediatrack.js) >>> [init segment fetched] => => => segment = ', this.initSegmentUri);
        } else {
          console.error('(mediatrack.js) >>> [init segment fetching failed] => => => segment = ', this.initSegmentUri);
        }
      }
    }
    player.eventemitter.emit('nxtBufferIsEnoughForPlay');
  }

  getSegmentByNumber(number) {
    var segment;
    for (var i = 0; i < this.representations[this.representationId].segments.length; i++) {
      if (this.representations[this.representationId].segments[i].number === number) {
        segment = this.representations[this.representationId].segments[i];
        break;
      }
    }
    return segment;
  }

  setRpresentationId(id) {
    this.representationId = id;
  }

  getInitSegment(segment) {
    return segment.map.resolvedUri;
  }

  nextBufferChunk() {
    return this.bufferQueue.shift();
  }

  // resetPresentations(newPresentations) {
  //   this.representations = newPresentations;
  // }

  // setAllSegments(segments) {
  //   this.segments = segments;
  // }

  // getSegmentLength() {
  //   return this.representations[this.representationId].segments.length;
  // }

  // appendSegment(newSegments) {
  //   var theLastSegment = this.segments[this.segments.length - 1];
  //   /** find the update position */
  //   var theUpdatedPosition =  newSegments.length - 1;
  //   for (var i = newSegments.length - 1; i >= 0; i--) {
  //     var newSegment = newSegments[i];
  //     if (newSegment.number === theLastSegment.number) {
  //       theUpdatedPosition = i + 1;
  //       break;
  //     }
  //   }

  //   for (var j = theUpdatedPosition; j < newSegments.length; j++) {
  //     var updatedSegment =  newSegments[j];
  //     // updatedSegment.number = theLastSegment.number + 1;
  //     this.segments.push(updatedSegment);
  //   }

  //   // console.log(this.segments);
  // }

  // removeSegment(index) {
  //   var segments = this.segments.filter(function(s) { return s.number != index});
  //   // console.log(segments);
  //   this.segments = segments;
  // }

  // getAllSegments() {
  //   return this._segments;
  // }

  // setTrackName(trackName) {
  //   this.trackName = trackName;
  // }

  // getSegmentUrl(number) {
  //   try {
  //     var s = this.getSegment(number);
  //     if (!s) {
  //       return null;
  //     }
  //     return s.resolvedUri;
  //   }catch (e) {
  //     console.error(e.stack);
  //   }
  // }
}