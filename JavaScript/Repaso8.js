//Objetoss
//Las variables tienen alcance y pueden ser de scope global o local 
//Recordando que scope significa variable
//El global scope puede ser tanto para un archivo completo de js como para un bloque de codigo
/*
- No hablamos mas que del alcance de las variables y su comportamiento, teniendo cuidado de sobreescbir una variable
- Js prioriza la variable local y si no existe la variable local entonces busca la variable global
- Una variable scope local puede ser accedida desde el bloque o funcion 
*/ 
function letsLearnScope() {
    // puedes usar let o const, pero la gravedad es constante prefiero usar const
    const gravity = 9.81;
    console.log(gravity);
}//tenemos uin error pq el scope es solo dentro de la funcion
//console.log(gravity);
letsLearnScope();

//Del mismo modo si intentamos acceder fuera de la funcion a una variable local nos dara error
if (true) {
    const gravity = 9.81;
    console.log(gravity); // 9.81
  }

  for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  }
//Aca si podemos acceder a la variable ejemplo2 pq el scope es global
  let ejemplo2 = 78;
  function ejemploFunction() {
    console.log(ejemplo2); 
  }
  ejemploFunction();

//Objetos: Es una coleccion de propiedades y metodos definidos por una clave:valor de modo que se usan {}
//Objeto vacio : let persona = {};
//Objeto con valores
let mascota = {
    nombre: 'Firulais',
    edad: 5

}
//Podemos imprimir el objeto completo o su propiedad siendo objeto.propiedad
console.log(mascota);
console.log(mascota.nombre); 
//Del mismo modo podemos conocer su tipo de dato
console.log(typeof mascota.nombre); 
//Podemos tener todo tipos de datos dentro de un objeto incluso un objeto dentro de otro objeto
let persona = {
    nombre: 'Juan',
    edad: 30,
    mascota: {
        nombre: 'Firulais',
        edad: 5
    }
}
//Podemos acceder a ellos de manera anidada por un punto e ir de una propiedad a otra
console.log(persona.mascota.nombre); 
//Tambien podemos acceder a las propiedades de un objeto usando corchetes
//De manera que tenemos objeto['propiedad'] y eso tmb podemos hacerlo de forma anidada
console.log(persona['nombre']);

//Recordando que los objetos almacenan funciones como metodos pero no las de flecha ya que ellas no manejan su this
// ademas el 'this' hace referncia al objeto en el que se encuentran y estas funciones son metodos de ese objeto

const estudiante = {
    nombre: 'Juan',
    edad: 20,
    //La forma mas moderna de definir un metodo es nombreFuncion(){}
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`); 
    },
    edadReturn(){
        return this.edad; 
    }
}

estudiante.saludar(); 
// da indefinido pq mi funcion no tiene un return
//console.log(estudiante.saludar());
//aqui si me daria un return por consola
console.log(estudiante.edadReturn());

//Al ser una estructura de datos mutable podemos agregar valores dentro 
//Podemos sobreescribir propiedades de un objeto desde fuera de este asignandole un nuevo valor a la propiedad principal
/*
const clave = 'nombreClave';
objeto[clave] = 'valorClave';
asi es ocmo podemos agregar propiedades a un objeto
*/
const direccion = 'Direccion';
estudiante[direccion] = 'Madrid';
console.log(estudiante);

//Metodos para los objetos:
//1. object.assign(): copiar un obj sin modificar el original
const persona1 = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
  };
  
const copiaPersona1 = Object.assign(persona1); 
console.log(copiaPersona1); 

//2. Object.keys(): devuelve un array con las claves del objeto
//al devolver un array podemos acceder a sus elementos por su indice
console.log(Object.keys(persona1));
console.log(Object.keys(persona1)[0])
//Lo mismo aplica para los valores de un objeto
//3. Object.values(): devuelve un array con los valores del objeto
console.log(Object.values(persona1));
console.log(Object.values(persona1)[0]);
//acceder a los valores de un objeto por su indice ya que tmb devuelve un array

//Para obtener ambos valores y claves de un objeto podemos usar el Object.entries()
console.log(Object.entries(persona1));
//Si accedemos a un indice entramos en un array
console.log(Object.entries(persona1)[0]);
    //Para acceder al valor usamos nuevamente otro indice
console.log(Object.entries(persona1)[0][1]);
//Este metodo guarda un arrays de arrays

//metodo: hasOwnProperty(): devuelve true o false si la propiedad existe o no
console.log(persona1.hasOwnProperty('nombre')); 
console.log(persona1.hasOwnProperty('apellido'));

//Ejercicios:
const dog = {};
console.log(dog);

// const clave = 'nombreClave';
// objeto[clave] = 'valorClave';
const nameD = 'nombre';
const legs = 'patas';
const color = 'color';
const age = 'edad';
const bark = 'ladrar';
dog[nameD] = 'Firulais';
dog[legs] = 4;
dog[color] = 'marron';
dog[age] = 5;
dog[bark] = function(){
    console.log('Guau!'); 
};
console.log(dog.hasOwnProperty('nombre'));
console.log(dog.hasOwnProperty('name'));

console.log(dog.nombre);
console.log(dog.patas);
console.log(dog.color);
console.log(dog[age]);
console.log(dog);
// console.log(dog[bark]);
//entonces en teoria es
// const nombreClave = 'NombreDeMiClave';
// objeto[nombreClave] = 'valorDeMiClave';

const breed = 'raza';
dog[breed] = 'labrador';
dog.getDogInfo = function() {
  //puedo enviar mi info por el valor de mi clave .  o por el valor de mi variable []
  return `El perro ${this.nombre} es de raza ${this.raza} y tiene ${this[legs]} patas.`;
};
//usar el bind(objeto) me ayuda a prevenir el undefined de this
//ya que ese this hace refencia al objeto en el que se encuentra y no por fuera
let info = dog.getDogInfo.bind(dog);
console.log(info());