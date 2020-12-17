function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  const player = {
    play:() => this.play(),
    pause:() => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },
    set muted(value) {
      this.media.muted = value;
    },
  };

  this.plugins.forEach(plugin => {
    plugin.run(player);
  });
}

MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function() {
  this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
  if(this.media.paused) {
    console.log('play video')
    this.play();
  } else {
    console.log('pause video')
    this.pause()
  }
}

MediaPlayer.prototype.mute = function(){
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function(){
  this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function(){
  if(this.media.muted === true){
    console.log('sound off')
    this.media.muted = false;
  }else {
    console.log('sound on')
    this.media.muted = true;
  }
}

export default MediaPlayer;