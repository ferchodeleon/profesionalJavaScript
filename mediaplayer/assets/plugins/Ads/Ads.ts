export interface Ad {
  imageUrl: string;
  title: String;
  body: String; //Descripción
  url: String;
}

const ALL_ADS: Ad[] = [
  {
    imageUrl: 'http://www.google.com.co',
    title: 'Curso',
    body: 'Descripción',
    url: '',
  },
]

class Ads {
  private static instance: Ads;
  private ads: Ad[]

  constructor() {
    this.initAds();
  }

  static getInstance() {
    if (!Ads.instance) {
      Ads.instance = new Ads();
    }

    return Ads.instance;
  }

  private initAds() {
    this.ads = [...ALL_ADS];
  }

  getAd() {
    if(this.ads.length === 0) {
      this.initAds();
    }
    return this.ads.pop();
  }
}

export default Ads;