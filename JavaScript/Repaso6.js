//Bucles: funciones de los lenguajes de programacion para realizar tareas repetitivas de manera rapida y eficaz
//for: repeticion mediante un incrementador
//Algo curioso de este bucle es que puedo pasar los elementos de un array a otro
let nombres = ['Jose', 'Pedro', 'Maria', 'Luis', 'Ricardo'];
let nombres2 = [];
for(let i = 0; i < nombres.length; i++){
    let valorRescatado = nombres[i];
    nombres2.push(valorRescatado);
}
//Teniendo en cuenta que no estoy modificando el array original solo copiando sus datos
console.log(nombres);
console.log(nombres2);

//Del mismo modo puedo pasar los datos de ese array y modificarlos en el nuevo:
let nombres3 = [];
for(let i = 0; i < nombres.length; i++){
    let valorRescatado = nombres[i];
    valorRescatado = valorRescatado.toUpperCase();
    nombres3.push(valorRescatado);
}
console.log(nombres);
console.log(nombres3);

//Bucle while y bucle do while
//while: se ejecuta mientras la condicion sea verdadera
let i = 0;
while(i<10){
    console.log(i);
    i++;
}

//do while: se ejecuta primero la instruccion y si la condicion es verdadera se continua con lo demas de modo que 
// esto me permite ejecutar la accion al menos una vez
let j = 0;
do{
    console.log(`Me ejecute ${j} vez/veces`);
    j++;
}while(j<2);

//Bucle for of: si no nos interesa el indice dentro de un array usamos este para iterar sobre los objetos dentro del array
let numeros = [1,2,3,4,5];
let nuevoNumeros = [];
//sintaxis:  for(const nombreVariableTomaraValorDeCadaDAto of nombreDelArrayQueVamosARecorrer)
//este for toma una copia temporal de cada dato pero no modifica mi array original
for (const n of numeros) {
    //Dentro de las instrucciones podemos hacer lo que queramos con los datos
    let nuevoNumero = n ** n;
    nuevoNumeros.push(nuevoNumero);
}
console.log(nuevoNumeros);

//break: usado para interrumpir un bucle dado una determinada accion o evento
//continue: omite ciertas iteraciones si se cumple alguna condicion
//Este brak y continue SI SE PUEDEN USAR DENTRO DE ESTE for of 
//el for of se usa cuando quiero trabajar de manera mas manual y compleja con los datos

//CAda uno tiene una diferencia en la cual una sirve para manejar cosas mas simples que el otro
//tomando en cuenta que no retorna nada simplemente podemos ahcer un tipo de crud con los datos
//for each: metodo que recorre arrays y permite ejecutar callbacks en sus datos
//el for each se usa cuando quiero manejar cosas mas simples y de manera mas automatica
/* sintaxos basica
array.forEach(function(elemento, indice, array) {
  // lo que quieras hacer con cada elemento
});
*/
let numerosPares = [2,4,6,8,10];
numerosPares.forEach((numero) => {
    console.log(numero * 2);
});
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];

  let a = 0;

  for(let i = 0; i<11; i++){
    console.log(i);
  }

  while(a<11){
    console.log(a);
    a++;
  }
//reeestablecer el valor de mi contador
a = 0;
  do{
    console.log(a);
    a++;
  }while(a<11);

  for(let i =11; i!=0; i--){
    console.log(i);
  };

  let n = 13;
  for(let i = 1; i<n+1; i++)
  {
        console.log(i);
  };
  let simbolo = '#'
  for(let i = 1; i<8; i++){
    
    console.log(simbolo);
    simbolo = simbolo + '#';
  }

  for(let i = 0; i<11; i++){
    console.log(`${i} x ${i} = ${i*i}`);
  }
  let enunciado = 0;
  for(let i = 0; i<11; i++){
    if(enunciado == 0){
        console.log('i   i^2   i^3');
        enunciado++;
    }
    console.log(`${i}  ${i*i}  ${i*i*i}`)
  };

  for(i = 0; i<101; i++){
    if(i%2 == 0){
        console.log(i);
    }
  };

  for(i = 0; i<101; i++){
    if(i%2 != 0){
        console.log(i);
    }
  };
  let total = 0;
   for(let i = 0; i<101;i++){
    total = total + i;
   }
   console.log(total);

   let numeroRandom = 0;
   let ARandom = [];
   for(let i = 0; ARandom.length<5; i++){
      numeroRandom = Math.random()*100;
      numeroRandom = parseInt(numeroRandom);
      if(ARandom.includes(numeroRandom)){
        console.log('Numero Repetido');
      }else{
        ARandom.push(numeroRandom);
      }
      
   }
   console.log(ARandom);
   let cantidad = Math.random()*10;
   cantidad = parseInt(cantidad);
   let numRandom = 0;
   let caracter = '';
   let abecedario  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   for(let i = 0; i<cantidad;i++){
      numRandom = Math.random()*100;
      numRandom = parseInt(numRandom);
      if(numRandom%2 == 0 && numRandom <26){
        caracter = caracter + abecedario[numRandom];
      }else{
        caracter = caracter + numRandom;
      }
   }
   console.log(`Tu id aleatorio es: ${caracter}`);
   let r,g,b = 0;
   do{
    r = Math.random()*1000;
    r = parseInt(r);
   }while(r>255);

   do{
    g = Math.random()*1000;
    g = parseInt(g);
   }while(g>255);
   do{
    b = Math.random()*1000;
    b = parseInt(b);
   }while(b>255);
   let color = `RGB:(${r},${g},${b})`;
   console.log(color);
  
   console.log(countries);
   //No se modifica el valor debido a que el for of no modifica el valor original para eso debemos acceder a los indices
   //pero podemos colocarlo en un nuevo array
   //recordar QUE LOS STRINGS SON DE TIPO PRIMITIVO POR ENDE NO PODEMOS MODIFICAR SU VALOR 
   let countries2 = [];
   for (const element of countries) {
    let e = element;
    e = e.toUpperCase();
    countries2.push(e);

   }
   console.log(countries);
   console.log(countries2);
  
   //No olvidando q el for of se usa para copiar elementos y trabajar con ellos mas no podemos modificar sobre todo los strings
   let longuitudes = [];
   for (const element of countries) {
    let longuitud =  element.length;
    longuitudes.push(longuitud);
   }
   console.log(longuitudes);
   let matriz = [];
   for (const element of countries) {
    let pais = element;
    let letras = element.slice(0,3).toUpperCase();
    let longuitud = element.length;
    let informacion = [pais,letras,longuitud];
    matriz.push(informacion);
   }
   console.log(matriz);
   
   let land = [];
   let noLand = [];
   for (const element of countries) {
    let verificador = element;
    if(verificador.includes('land')){
      land.push(element);
    }else{
      noLand.push(element);
    }
   }
   console.log(land);
   console.log(noLand);
   //includes(): metodo para saber si un string tiene un fragmento de texto

   let cantida = 0;
   let pais = '';
   for (const element of countries) {
    
    if(element.length>cantida){
      cantida = element.length;
      pais = element;
      }
    }
    console.log(`El pais es ${pais} con ${cantida} letras`);

    //Ejercicios nivel 3:
    