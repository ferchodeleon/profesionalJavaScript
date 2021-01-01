interface Observer { //Reciben actualizaciones de la información
  update: (data: any) => void //Va ser una actualización la cual recibe datos y son de tipo cualquiera
}

interface Subject {
  subcribe: (observer: Observer) => void //Con VOID definimos que el tipo es undefine
  unsubcribe: (observer: Observer) => void
}

class BitcoinPrice implements Subject {
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector("#value");
    el.addEventListener('input', () => {
      this.notify(el.value);
    });
  }

  subcribe (observer: Observer) {
    this.observers.push(observer);
  }

  unsubcribe(observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer
    })

    this.observers.splice(index, 1); //Funcion de listas de arreglos donde indicamos el indice y los elementos que queremos sacar.
  }

  notify(data: any) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;


  constructor() {
    this.el = document.querySelector('#price')
  }
  update(data: any){
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subcribe(display);

setTimeout(
  () => value.unsubcribe(display), 5000
)