export class NXTMediaTrack {
  type;
  segments = [];
  representations = [];
  representationId = 0;

  constructor(type) {
    this.type = type;
    this.segments = [];
    this.representations = [];
    this.representationId = 0;
  }

  setRepresentations(representations) {
    this.representations = representations;
  }

  setRpresentationId(id) {
    this.representationId = id;
  }

  getInitialSegment() {
    return this.representations[this.representationId].segments[0];
  }

  resetPresentations(newPresentations) {
    this.representations = newPresentations;
  }

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

  getSegment(number) {
    var segment;
    for (var i = 0; i < this.representations[this.representationId].segments.length; i++) {
      if (this.representations[this.representationId].segments[i].number === number) {
        segment = this.representations[this.representationId].segments[i];
        break;
      }
    }
    return segment;
  }

  setAllSegments(segments) {
    this.segments = segments;
  }

  getSegmentLength() {
    return this.representations[this.representationId].segments.length;
  }

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