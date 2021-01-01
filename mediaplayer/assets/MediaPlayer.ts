class MediaPlayer {
  media: HTMLMediaElement;
  plugins: any[];
  container: HTMLElement;


  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
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
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      console.log('play video');
      this.play();
    } else {
      console.log('pause video');
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (this.media.muted === true) {
      console.log('sound off');
      this.media.muted = false;
    } else {
      console.log('sound on');
      this.media.muted = true;
    }
  }
}

export default MediaPlayer;