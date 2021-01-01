import MediaPlayer from "../../MediaPlayer";
import Ads, { Ad } from './Ads';


class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;
  private adsContainer: HTMLElement;

  constructor() {
    this.ads = Ads.getInstance();
    this.adsContainer = document.createElement('div');
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }
  run(player: MediaPlayer) {
    this.player = this.player;
    this.player.container.appendChild(this.adsContainer);
    this.media = this.player.media;
    this.media.addEventListener('timeupdate', this.handleTimeUpdate);
  }

  private handleTimeUpdate() {
    const currentTime = Math.floor(this.media.currentTime)
    if(currentTime % 30 === 0) {
      this.renderAd()
    }
  }

  private renderAd() {
    if (this.currentAd) {
      return;
    }
    const ad = this.ads.getAd();
    this.currentAd = ad;
    this.adsContainer.innerHTML = ``

    setTimeout(() => {
      this.currentAd = null;
      this.adsContainer.innerHTML = '';
    }, 10000);
  }
}

export default AdsPlugin;