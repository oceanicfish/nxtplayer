import { getPlaces, convertToSeconds } from "../utils";
import { format } from "string-format-js"

export class VideoTrack{
    sns = [];
    discontinues = [];
    representations = [];
    
    constructor(mpd) {
        let periods = mpd.MPD.Period;
        periods.forEach(p => {
            let pStart = convertToSeconds(p.$.start);
            this.discontinues.push(pStart);
            let baseUrl = p.BaseURL ? p.BaseURL : mpd.MPD.BaseURL;
            let adaptationSets = p.AdaptationSet;
            adaptationSets.forEach(as => {
                if (as.$.mimeType === 'video/mp4') {
                    let reps = as.Representation;
                    let rootTemplates = as.SegmentTemplate;
                    reps.forEach(r => {
                        
                        // Get SegmentTemplate information
                        let templates = r.SegmentTemplate;
                        if (!templates) {
                            templates = rootTemplates;
                        }

                        // Start to extract segments
                        let segments = [];
                        let template = templates[0];
                        if (template.$.media.indexOf('$Time$') > 0) {
                            segments = this.calculateLiveSegmentsByTime(template, r, pStart, baseUrl[0]);
                        } else {
                            segments = this.calculateLiveSegmentsByNumber(template, r, pStart, baseUrl[0]);
                        }

                        // Get Representation information.
                        let repId = r.$.id;
                        let width = r.$.width;
                        let height = r.$.height;
                        let bandwidth = r.$.bandwidth;
                        
                        // insert segments to representations
                        if (this.representations.find( e => e.id === repId)) {
                            // Representation is exist already.
                            let targetRepresentation = this.representations.find( e => e.id === repId);
                            if (targetRepresentation.segments) {
                                segments.forEach(se => {
                                    targetRepresentation.segments.push(se);
                                });
                            }else {
                                targetRepresentation.segments = segments;
                            }
                        }else {
                            // Representation has not been created yet.
                            let newRepresentation = {
                                id: repId,
                                width: width,
                                height: height,
                                bandwidth: bandwidth,
                                segments: segments,
                            };
                            this.representations.push(newRepresentation);
                        }
                    });
                }
            });
        });
    }

    /**
     * Get Representations
     * @returns 
     */
    getRepresentations() {
        return this.representations;
    }

    /**
     * Get Discontinues
     * @returns 
     */
    getDiscontinues() {
        return this.discontinues;
    }

    /**
     * Calculate Live Segments by the placeholder of $Time$
     * @param {*} template 
     * @param {*} representation 
     * @param {*} periodStart 
     * @param {*} baseUrl 
     * @returns 
     */
    calculateLiveSegmentsByTime(template, representation, periodStart, baseUrl) {
        console.log('calculate live segments by times');
        let uris = [];
        let sn = 0;
        if (this.sns.find(e => e.repId === representation.$.id)) {
            sn = this.sns.find(e => e.repId === representation.$.id).sn;
        }else {
            this.sns.push({repId: representation.$.id, sn: sn});
        }
        let initUri = template.$.initialization.replace('$RepresentationID$', representation.$.id);
        let S = template.SegmentTimeline[0].S;
        S.forEach(s => {
            let d = s.$.d;
            let r = s.$.r ? s.$.r : 0;
            let t = s.$.t;
            for (var i = 0; i <= r; i++) {
                let time = Number(t) + Number(d) * i;
                let uri = template.$.media.replace('$RepresentationID$', representation.$.id).replace('$Time$', time);
                let timeline = periodStart;
                let duration =  d / template.$.timescale;
                let presentationTimeOffset = template.$.presentationTimeOffset ? template.$.presentationTimeOffset : 0;
                let presentationTime = Number(periodStart)
                                     + ((Number(t) - Number(presentationTimeOffset)) / Number(template.$.timescale))
                                     + ((Number(d) / Number(template.$.timescale)) * i) ;
                uris.push({
                    uri: uri,
                    baseUrl: baseUrl,
                    timeline: timeline,
                    duration: duration,
                    init: initUri,
                    number: sn++,
                    presentationtime: presentationTime
                });

                this.sns.find(e => e.repId === representation.$.id).sn = sn;
            }
        });
        return uris;
    }

    /**
     * Calculate Live Segments by the placeholder of $Number$
     * @param {*} template 
     * @param {*} representation 
     * @param {*} periodStart 
     * @param {*} baseUrl 
     * @returns 
     */
    calculateLiveSegmentsByNumber(template, representation, periodStart, baseUrl) {
        console.log('calculate live segments by number');
        let uris = [];
        let sn = 0;
        if (this.sns.find(e => e.repId === representation.$.id)) {
            sn = this.sns.find(e => e.repId === representation.$.id).sn;
        }else {
            this.sns.push({repId: representation.$.id, sn: sn});
        }
        let initUri = template.$.initialization.replace('$RepresentationID$', representation.$.id);
        let number = template.$.startNumber;
        let places = getPlaces(template.$.media);
        let S = template.SegmentTimeline[0].S;
        S.forEach(s => {
            let d = s.$.d;
            let r = s.$.r ? s.$.r : 0;
            let t = s.$.t;
            for (var i = 0; i <= r; i++) {
                let segmentNumber = number.toString().padStart(places, '0');
                let uri = template.$.media
                                        .replace('$RepresentationID$', representation.$.id)
                                        .replace( /\%\d+d/, '')
                                        .replace('$Number$', segmentNumber);
                number++;
                let timeline = periodStart;
                let duration =  d / template.$.timescale;
                let presentationTimeOffset = template.$.presentationTimeOffset ? template.$.presentationTimeOffset : 0;
                let presentationTime = Number(periodStart)
                                        + ((Number(t) - Number(presentationTimeOffset)) / Number(template.$.timescale))
                                        + ((Number(d) / Number(template.$.timescale)) * i) ;
                uris.push({
                    uri: uri,
                    baseUrl: baseUrl,
                    timeline: timeline,
                    duration: duration,
                    init: initUri,
                    number: sn++,
                    presentationtime: presentationTime
                });

                this.sns.find(e => e.repId === representation.$.id).sn = sn;
            }
        });
        return uris;
    }
}