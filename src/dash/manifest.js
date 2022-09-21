import { sleep } from '../utils';
import { VideoTrack } from './videotrack';
import { parseMPD4test } from '../mpd';

const xml2js = require('xml2js');

export class DashManifest{
    manifestUri;
    parser;
    mpd;
    constructor(uri) {
        this.manifestUri = uri;
        this.parser = xml2js.Parser();
    }

    async parseMPD() {
        const res = await fetch(this.manifestUri);
        const manifest = await res.text();
        this.parser.parseString(manifest, this.parseResult.bind(this));
        let mpdparser = await parseMPD4test(manifest, this.manifestUri);
        console.log('=> => => => => => => => => => => => => => => => => => => => => => => => MPD-Parser: ');
        console.log(mpdparser);
        while (!this.mpd) {
            await sleep(500);
        }
        console.log('=> => => => => => => => => => => => => => => => => => => => => => => => NXT Player: ');
        console.log(this.mpd);

        let videoTrack = new VideoTrack(this.mpd);
        // let aTrack = new AudioTrack();
        let videoRepresentations = videoTrack.getRepresentations();
        let discontinues = videoTrack.getDiscontinues();
        // let audio = aTrack.getAudioDataFrom(this.mpd);

        return this.mpd;
    }

    parseResult(error, result) {
        if (error) {
            console.error(error);
        }else {
            console.log(result);
            this.mpd = result;
        }
    }


}