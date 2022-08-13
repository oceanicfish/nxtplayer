import { parse as mpdParser } from "mpd-parser";

var parsedManifest;
// const manifestUri = 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/4577dca5f8a44756875ab5cc913cd1f1/index.mpd';
// DRM vod
// const manifestUri = 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/2fc23947945841b9b1be9768f9c13e75/index.mpd';
// DRM Live
// const manifestUri = 'https://d24rwxnt7vw9qb.cloudfront.net/v1/dash/e6d234965645b411ad572802b6c9d5a10799c9c1/All_Reference_Streams/2fc23947945841b9b1be9768f9c13e75/index.mpd';
// const manifestUri = 'https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd';
// const manifestUri = 'https://dash.akamaized.net/dash264/TestCases/5a/nomor/1.mpd';
// const manifestUri = 'https://media.axprod.net/TestVectors/v7-Clear/Manifest_1080p.mpd';

async function parseMPD(manifestUri) {
  const res = await fetch(manifestUri);
  const manifest = await res.text();
  parsedManifest = mpdParser(manifest, { manifestUri });
  return parsedManifest;
}

async function reloadMPD(manifestUri) {
    const res = await fetch(manifestUri);
    const manifest = await res.text();
    var newParsedManifest = mpdParser(manifest, { manifestUri, previousManifest: parsedManifest });
    return newParsedManifest;
}

export { parseMPD, reloadMPD };
