export class NXTMediaTrack {
  segments = [];

  constructor() {
    this.segments = [];
  }

  appendSegment(newSegments) {
    var theLastSegment = this.segments[this.segments.length - 1];
    /** find the update position */
    var theUpdatedPosition =  newSegments.length - 1;
    for (var i = newSegments.length - 1; i >= 0; i--) {
      var newSegment = newSegments[i];
      if (newSegment.number === theLastSegment.number) {
        theUpdatedPosition = i + 1;
        break;
      }
    }

    for (var j = theUpdatedPosition; j < newSegments.length; j++) {
      var updatedSegment =  newSegments[j];
      // updatedSegment.number = theLastSegment.number + 1;
      this.segments.push(updatedSegment);
    }

    // console.log(this.segments);
  }

  removeSegment(index) {
    var segments = this.segments.filter(function(s) { return s.number != index});
    // console.log(segments);
    this.segments = segments;
  }

  getSegment(index) {
    var segment;
    for (var i = 0; i < this.segments.length; i++) {
      if (this.segments[i].number === index) {
        segment = this.segments[i];
        break;
      }
    }
    return segment;
  }

  setAllSegments(segments) {
    this.segments = segments;
  }

  getAllSegments() {
    return this._segments;
  }

  setTrackName(trackName) {
    this.trackName = trackName;
  }

  getSegmentUrl(index) {
    try {
      var s = this.getSegment(index);
      if (!s) {
        return null;
      }
      return s.resolvedUri;
    }catch (e) {
      console.error(e.stack);
    }
  }
}