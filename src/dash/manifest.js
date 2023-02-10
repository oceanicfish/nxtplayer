import { sleep } from '../utils';
import { VideoTrack } from './videotrack';
import { AudioTrack } from './audiotrack';

const xml2js = require('xml2js');

export class DashManifest{
    manifestUri;
    parser;
    mpd;
    videoTrack;
    audioTrack;
    location;
    stopUpdateManifest = false;
    firstTime = true;

    constructor(uri) {
        this.manifestUri = uri;
        this.parser = xml2js.Parser();
        this.videoTrack = new VideoTrack()
        this.audioTrack = new AudioTrack()
    }

    /**
     * parse Manifest
     * @returns 
     */
    async parseMPD() {
        console.log('=> => => this.manifestUri = ', this.manifestUri);

        /** The first time to get actual Url  */
        var res, manifest;
        if (this.firstTime) {
            res = await fetch(this.manifestUri);
            manifest = await res.text();
            this.parser.parseString(manifest, this.parseResult.bind(this));
            await sleep(200);
            console.log('=> => => this.manifestUri = ', this.manifestUri);
            this.firstTime = false;
        }

        /** get manifest data from the actual Url */
        res = await fetch(this.manifestUri);
        manifest = await res.text();
        this.parser.parseString(manifest, this.parseResult.bind(this));
        await sleep(200);

        this.videoTrack.parse(this.mpd);
        this.audioTrack.parse(this.mpd);
        let videoRepresentations = this.videoTrack.getRepresentations();
        let audioRepresentations = this.audioTrack.getRepresentations();
        console.log('[manifest data] start = ', 
                    audioRepresentations[0].segments[0].number, 
                    '(', audioRepresentations[0].segments[0].presentationTime, '), end = ',
                    audioRepresentations[0].segments[audioRepresentations[0].segments.length - 1].number, 
                    '(', audioRepresentations[0].segments[audioRepresentations[0].segments.length - 1].presentationTime, ')');
        let discontinuities = this.videoTrack.getDiscontinues();
        
        let parsedData = {
            discontinuityStarts: discontinuities,
            video: videoRepresentations,
            audio: audioRepresentations
        }
        return parsedData;
    }

    parseResult(error, result) {
        if (error) {
            console.error(error);
        }else {
            this.mpd = result;
            if (this.mpd.MPD.Location) {
                this.manifestUri = this.mpd.MPD.Location[0];
            }
        }
    }


}