
var player;

for(i = 0; i < streams.length; i++) {
  let stream_list = window.document.getElementById('stream_list');
  stream_list.innerHTML += "<li> <a href=\"#\" class=\"list-group-item list-group-item-action\" aria-current=\"true\" onclick=\"play(" + i + ")\">" + streams[i].name + "</a></li>"
}

function play(index) {
  options = {
    video: window.document.getElementById('video'),
    url: streams[index].url
    // drm: streams[index].drm
  }
  player = new NXPlayer(options);
  player.play();

  setInterval(() => {
    window.document.getElementById('player_current_time').innerHTML = window.document.getElementById('video').currentTime.toFixed(3);
  }, 10);
}
