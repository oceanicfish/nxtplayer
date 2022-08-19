export const startABRController = function (player, videoTrack) {
  /** representation monitor */
  setInterval(async () => {
    videoTrack.setRpresentationId(player.videoRepresentationId);
  }, 1000);
}