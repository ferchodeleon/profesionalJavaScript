import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
// const player = new MediaPlayer({ el: video });
const player = new MediaPlayer({ 
  el: video,
  plugins: [
    new AutoPlay()
  ],
});

const button = document.getElementById("playPause")
button.onclick = () => player.togglePlay();

const buttonMute = document.getElementById("mute")
buttonMute.onclick = () => player.toggleMute();
