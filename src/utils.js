
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

export {sleep, getMedia, getChunkName} 