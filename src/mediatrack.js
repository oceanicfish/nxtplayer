export class NXTMediaTrack {

  constructor() {}

  addSegment(segment) {
    this.segments.push(segment);
  }

  getSegment(index) {
    return this.segments[index];
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
    if (this.segments && this.segments[index]) {
      return this.segments[index].resolvedUri
    }
    return null;
  }
}