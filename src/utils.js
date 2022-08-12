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
function getMedia(url) {
  return fetch(url)
    .then((res) => {
      if (res.status !== 200) {
        console.warn("Unexpected status code " + res.status + " for " + url);
        throw res;
      }
      return res.arrayBuffer();
    })
    .catch((err) => console.dir(err));
}

export {sleep, getMedia} 