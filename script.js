// changes speed of playback

function speed(playbackRate) {

  let videos = document.getElementsByTagName("video");
  
  for (let video of videos) {
    video.playbackRate = playbackRate
  }

  document.getElementById('playSpeedMultiplier').innerText = playbackRate+'x';
}

// create slider to control speed

var slider = document.createElement('input');

slider.className = 'speed-slider';
slider.type = "range";
slider.step = "0.1";
slider.value = "1";
slider.min = "0.2";
slider.max = "4";

// change speed when slider is moved

slider.oninput = function() {
  speed(this.value);
}

// add slider to speed change menu

document.getElementById("playSpeedExpander").appendChild(slider);
