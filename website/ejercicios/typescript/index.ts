console.log('Hello TypeScript');

function add(a: number, b: number) {
  return a + b;
}

const sum = add(2,2);

console.log('La suma da: ',sum);

//Variables y tipos

//Boleano
let num = true;
num = false;

//Números

let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String
let nombre: string = 'Fernando'
let saludo: string = `Me llamo ${nombre}`

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];

let peopleAndNumber: Array< string | number > = [];
peopleAndNumber.push("Ricardo");
peopleAndNumber.push(2000);

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;

console.log(`Mi color favorito es: ${colorFavorito}`);

//Any

let comodin: any = 'Joker';
comodin = {type: 'Wildcard'}

//Object
let someObject: object = {tipo: "persona"};

//funciones

function suma(a: number, b: number): number {
  return a + b;
}

const addSuma = suma(5,5);

console.log(addSuma);

//dejar una función con parametro opcional


function optionParams(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
}

const addOption = optionParams('Fernando');

console.log(addOption);

//PAra dejar un valor por defecto en un parametro, seguido del tipo se agregael valor por defecto

function optionParamsDefault(firstName: string, lastName: string = 'Apellido'): string {
  return `${firstName} ${lastName}`;
}

const addOptionParamsDefault = optionParamsDefault('Fernando');

console.log(addOptionParamsDefault);

interface Rectangulo {
  ancho: number,
  alto: number,
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 5
}

function areaRect(r: Rectangulo): number {
  return r.alto * r.ancho;
}

console.log(areaRect(rect));