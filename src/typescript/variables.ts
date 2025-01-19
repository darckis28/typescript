// let string: string;
// string = "casa";
// console.log(string);

const letter: string = "cabeza de hongo";
const phone: number = 914135701;
const show: boolean = false;

// tipo de dato que no es fijo  : any
let cualquierCosa: any = "caasdasd";
cualquierCosa = 5;
cualquierCosa = true;

// funciones
function myFunction(letter: string): void {
  console.log(letter);
}
myFunction("calasda");

//listas
let myList: Array<string> = ["dasdsad", "cadsada"];
let myList2: Array<number> = [555555, 5155151];
let myList3: [string, number];

// Clases

class MyClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let myclass: MyClass = new MyClass("jose", 55);
console.log(myclass);
