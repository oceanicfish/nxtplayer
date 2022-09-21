
/**
 * sleep for the specified amount of time
 * @param {*} ms 
 * @returns 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch url and return the arrayBuffer
 * @param {*} url 
 * @returns 
 */
async function getMedia(url) {
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.warn("Unexpected status code " + res.status + " for " + url);
        return undefined;
      }else {
        console.log('=> => => fetched segment = ', url);
        return res.arrayBuffer();
      }
    })
    .catch((err) => console.dir(err));
}

function getChunkName(url) {
  var chunkName;
  var substring1;
  if (url.indexOf('?') == -1) {
    substring1 = url;
  }else {
    substring1 = url.split('?')[0];
  }
  let arr1 = substring1.split('_');
  chunkName = arr1[arr1.length - 1].replace('.mp4', '');
  return chunkName;
}

function getPlaces(template) {
  let places = 0;
  let start = template.indexOf('%');
  let end = template.indexOf('d$');
  if (start > 0 && end > 0 && end > start) {
    places =  template.substring(start + 1, end);
    if (places.startsWith('0')) {
      places = places.substring(1);
    }
  }
  return places;
}

function convertToSeconds(periodStart) {
  let sec = 0;
  let ps = periodStart.replace('PT', '').replace('S', '');
  if (ps.indexOf('H') > 0) {
    ps = ps.replace('H', '*3600+');
  }
  if(ps.indexOf('M') > 0) {
    ps = ps.replace('M', '*60+');
  }
  sec = eval(ps);
  return sec;
}

export {sleep, getMedia, getChunkName, getPlaces, convertToSeconds} 