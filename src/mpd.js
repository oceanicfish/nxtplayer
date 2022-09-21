import { parse as mpdParser } from "mpd-parser";


var parsedManifest;

async function parseMPD(manifestUri) {
  const res = await fetch(manifestUri);
  const manifest = await res.text();
  // console.log(manifest);
  parsedManifest = mpdParser(manifest, { manifestUri });
  // console.log(parsedManifest);
  return parsedManifest;
}

async function parseMPD4test(manifest, uri) {
  parsedManifest = mpdParser(manifest, { uri });
  console.log(parsedManifest);
  return parsedManifest;
}

async function reloadMPD(manifestUri) {
    const res = await fetch(manifestUri);
    const manifest = await res.text();
    var newParsedManifest = mpdParser(manifest, { manifestUri, previousManifest: parsedManifest });
    parsedManifest = newParsedManifest;
    return newParsedManifest;
}

export { parseMPD, parseMPD4test, reloadMPD };
