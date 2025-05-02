/*
    Arrays: Colecciones de elementos, con un index que empieza en 0, se coleccionan diferentes tipos de datos
    los cuales van ordenados y se pueden modificar
    En JS son objetos ya que tienen metodos y se denotan con [].
*/

// import paises from "./paises";

//Declaración de arrays en JS
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(letras);
//podemos imprimir tmb indices
console.log(letras[0]);
console.log(letras[1]);

const numeros = [1,2,3,4,5];
console.log('Numeros:', numeros);
//Del mismo modo podemos usar metodos dentro de estos arrays
console.log(letras.length); //Obtenemos el valor de la longuitud del array

//A pesar que se puede almacenar diferentes tipos de datos dentro de un mismo array lo mas recomendable
//Es no hacerlo ya que puede generar problemas de tipo de dato y de estructura de datos

//Podemos crear un array usando split
//split(): Divide un string en subcadenas acorde un argumento para dividirlos, crea una nueva cadena dentro de un array}
const nombre = "JONATHAN";
console.log(nombre.split(''));
//Como vemos hemos creado un array a partir de una cadena de modo que tenemos un array longuitud 8
//Esta condicion que le damos al s,plit puede ser la que nosotros deseemos
const numbers = '123123123123123';
console.log(numbers.split(3));
//Como vemos hemos separado los elementos a partir del elemento 3 el cual curiosamente es excluido entonces solo es indicador
//de como se separan los elementos dentro del array

//Recordar que accedemos a los elementos de un array mediante su indice
//Podemos acceder al ultimo elemento haciendo uso de lastindex pero definiendolo como variable
let lastIndex =  numeros.length - 1;
console.log(numeros[lastIndex]);


//Recordar que array es un tipo de dato no primitivo por ende no podemos reasignar su referencia 'nombre' a otra variable con 
//el uso de const pero si podemos modificar su contenido por el mismo concepto de primitivos podemos reasignar valroes dentro 
//del indice
numeros[0] = 99;
numeros[lastIndex]= -23;
console.log(numeros);

//METODOS PARA MANIPULAR ARRAYS:
//Podemos usar un constructor crear arrays pero es mejor hacerlo de manera asi: [];
//.fill(elemento a rellenar): rellenar un array vacio con elementos dichos en el argumento
const a1 = new Array(12);
console.log(a1.fill(23));
//Te das cuenta que fill solo sirve para rellenar elementos de un array con un tamaño preestablecido de modo que con el otro
//no podemos insertar datos pq esta vacio

//primerArray.concat(segundoArray): une dos arrays en uno solo
const a2 = [1,2,3,4,5];
const a3 = [6,7,8,9,10];
console.log(a2.concat(a3));

//.length: devuelve la longuitud de un array
console.log(a2.length);

//.indexOf(valor del indice del array): devuelve el valor del indice de un elemento dentro de un array
console.log(numbers.indexOf(3)); // el elemento 3 se encuentra en el indice 2
console.log(numbers[2]); //Comprabado que si estaba
//En caso de no existir ese elemento dentro del array se devolvera el valor de '-1'
console.log(numbers.indexOf(134));
//Con esto podemos verificar si un elemento existe o no dentro de un array de modo que 
let valor = 234;
if(numbers.indexOf(valor) === -1){
    console.log('El elemento no se encuentra en el array');
}else{
    console.log('El elemento se encuentra en el array');
}
//.lastIndexOf(valor del indice del array): devuelve el valor del indice de un elemento dentro de un array
//Es decir da la posicion del ultimo elemento a evaluarse
console.log(numbers.lastIndexOf(3));

//includes(): permite saber si existe un elemento IGUALITO dentro de una cadena y devuelve un booleano
let texto1 = "30 Days Of JavaScript";
console.log(texto1.includes("Days")); 
console.log(texto1.includes("days"));

//isArray: sirve para comporbar si una variable es un array
let a = 34;
console.log(Array.isArray(a));
let b = ['a', 'b', 'c'];
console.log(Array.isArray(b));

//toString(); podemos para un array a un string esto es muy usado
let c = ['a', 'b', 'c'];
console.log(c.toString());

//.join(); unir elementos de un array en una sola cadena string podemos definir un argumento de como se van a unir
//Esto es mas usado que el toString pq me da la posibilidad de tener un string con un separador a mi gusto
let d = ['a', 'b', 'c'];
console.log(d.join(' ')); //a b c
console.log(d.join('-')); //a-b-c
console.log(d.join('Mami')); 
//EL uso mas curioso que vi es para usarlo en URLS de modo que podemos unir los elementos del array de los documentos
//uniendolos con / 
let url = ['home', 'about', 'contact'];
console.log(url.join('/'));

//.silce(): podemos cortar elementos dentro de un array definimos un inicio y final y creara un nuevo array
//Si no definimos el final cortara hasta el final del array dentro del argumento van los indices
//No se incluye el elemento del final pero si el inicio
let e = ['a', 'b', 'c', 'd', 'e'];
console.log(e.slice(1, 3)); 

//.splice(): tiene 3 parametros(posicion inicial a eliminar, numero de elementos, cantidad de elementos a agregar(opcional))
//Si solo definimos la posicion inicial a eliminar se eliminara el elemento de esa posicion
let f = ['a', 'b', 'c', 'd', 'e'];
console.log(f.splice(0,3));//Corta desde la posicion 0 a la 3 pero a esa no la incluye
// es decir corta los 3 elementos no indices

//.push(): agrega elementos al final del array
let g = ['a', 'b', 'c'];
g.push('d');
console.log(g);

//.pop(): elimina el ultimo elemento del array  
let h = ['a', 'b', 'c'];
h.pop();
console.log(h);
//.shift(): elimina el primer elemento del array
let i = ['a', 'b', 'c'];
i.shift();  
console.log(i);
//.unshift(): agrega elementos al inicio del array
let j = ['a', 'b', 'c'];
j.unshift('d');
console.log(j);

//reverse(): invierte el orden de un array
let k = ['a', 'b', 'c'];
console.log(k.reverse());

//.sort(): ordena los elementos de un array o en orden alfabetico
//Si no le pasamos un argumento ordena en orden alfabetico
let l = [1,5,3,8,5,3,8,5,34,3,99,0];
l.sort();
console.log(l);
let m = ['c', 'a', 'b'];
m.sort();
console.log(m);

//Arrays de arrays: No son mas que las famosas matrices , convertidos en tablas o amtrices de datos, en colecciones de objetos etc...
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
//A la hora de imprimir un aarray de arrays su longuitud es 2 por que tenemos dos arrays dentro de un array
console.log(fullStack.length);
//Del mismo modo cada array se vuelve un indice
console.log(fullStack[0]);
console.log(fullStack[0][1]);
//Podemos accer a un elemento dentro de un array indicando el indice de aquel array y el indice dentro de ese array seleccionado

//Ejercicios de repaso:
//Declarar un array vacio
let vacio = [];
console.log(vacio);
console.log(vacio.length);
//Declarar un arra con mas de 5 elementos para ello usamos el constructor para definir su numero de elementos
const array1 =  new Array(6);
console.log(array1);//Tenemos la memoria reservada pero sin definir sus elementos dentro
console.log(array1.length);
//Obtener el primer, ultimo y elemento de medio del array}
const array2 = [1,2,3,4,5,6,7,8,9];
console.log(array2[0]);
let ultimo =  array2.length - 1;
console.log(array2[ultimo]);
let medio  =  array2.length / 2;
console.log(medio);
medio = Math.round(medio);
console.log(medio);
//Tener en cuenta que al dividir entre 2 js no entiende decimales en el indice por lo que se debe redondearlo
console.log(array2[medio]);

//EJERCICIO 5:
let mixDataTypes = [1,'hola',true,null,69,'jose'];
console.log(mixDataTypes.length);

let itCompanies = ['facebook','google','microsoft','aplee','ibm','oracle','amazon'];
console.log(itCompanies);
console.log(itCompanies.length);

let ultimaEmpresa = itCompanies.length-1;
let mediaEmpresa = itCompanies.length/2;
mediaEmpresa = Math.round(mediaEmpresa);
console.log(mediaEmpresa);
console.log(itCompanies[0]);
console.log(itCompanies[ultimaEmpresa]);
console.log(itCompanies[mediaEmpresa]);

for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i]);
}

for(let i = 0; i < itCompanies.length; i++){
    let empresa = itCompanies[i];
    empresa = empresa.toUpperCase();
    itCompanies[i] = empresa;
    console.log(itCompanies[i]);
}
//El metodo que yo realice estaba bien pero podemos usar un for each para hacerlo de manera mas elegante 
//for each: metodo de lso arrays para ejecutar una funcion en cada eleento
//esto lo hace sobre el array original no sobre uno nuevo
itCompanies.forEach((empresa, i, arr ) => {
    arr[i] = empresa.toLowerCase();
});
console.log(itCompanies);
/*
    Explicacion: el for each va a recorrer el array de itCompanies, en cada iteracion rescatamos el elemento de cada indice
    el cual va a ser conocido como empresa, el segundo valor que es el indice actual en el quie se encuentra que sera i y el tercer
    valor el cual es el array completo es decir la referencia del array original para poder hacer los cambios
    - Pasamos una referencia del array por motivos de renidmiento y memoria es por ello q no es optimo pasar todo el array al usar
    una funcion sino directamente su referncia sin necesidad de estarla copiando
    - Esto no es usado unicamente en arrays sino tmb en todo el entorno de js
*/

let numerosPares = [2,4,6,8,10];
//Vamos a convertirlos en impares
numerosPares.forEach((pares,indice,referencia)=>{
    referencia[indice] = (pares + 1);
});
console.log(numerosPares);
//Para pasar de un array a una cadena de texto podemos hacerlo con toString pero teniendo en 
//cuenta que usara las comas para diferenciar elementos
let mensaje = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'y', 'Amazon'];
console.log(mensaje.toString());
//Podemos usar en metodo alternativo el cual es join(argumento separador)
console.log(mensaje.join(' ') + ' son grandes empresas de TI')
//pero para este ejercicio no debia usar el 'y' sino hacerlo son slice y separar de forma indp las partes
let empresaVerificar = 'faceboook';
if(itCompanies.includes(empresaVerificar)){
    console.log(empresaVerificar);
}else{
    console.log('La empresa no existe');
}

//Filtrar empresas que tienen mas e una 'o' sin usar el filter:
for (let i = 0; i< itCompanies.length; i++) {
    let contador = 0;
    let empresa = itCompanies[i];
  for(let j = 0; j < empresa.length; j++){
    if(empresa[j] == 'o'){
        contador++;
    }
  }
  if (contador > 1){
    console.log(itCompanies[i]);
  }
}
//Ordenar usando sort: Me ordena alfabeticamente
// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(0,3));
// let ultimapos = itCompanies.length ;
// let ultimosTres = ultimapos - 3;
// console.log(itCompanies)
// //Notar que el slice me indica desde que posicion hasta cual voy a recortar esta ultima no se incluye
// console.log(itCompanies.slice(ultimosTres,ultimapos));
//Notar que un string se comportaria como un array pero con la sutileza de que este no va a modificar su valor
//y puede tener los mismos metodos y recorrer por indices siempre y cuando el valor sea similar
//No olvidar que el espacio dentro del string ocupa un valor de indice y espacio en memoria del mismo modo
 
let array = [1,2,3,4,5,6,7,8,9];
array.pop();
console.log(array);
array.shift();
console.log(array);

//Para modificar o eliminar un valor intermedio puedo hacerlo on el uso de splice el cual me devuelve el array
//original pero modificado de modo que splice(indice,elementos a cortar);

let valorIntermedio = array.length/2;
valorIntermedio = parseInt(valorIntermedio);
console.log(valorIntermedio);
array.splice(valorIntermedio,1);
//En el indice 3 me elimina un solo elemento a partir de la posicion de ese indice
//Si coloco el 1 me va eliminar el actual unicamente
console.log(array);

//Vaciar un array, dandole una longuitud de 0 de modo que sus elementos si no estan referenciados en otro lugar
//Podemos hacer que esos datos vayan con el garbage collecotr de js y se eliminen de manera automatica
array.length = 0;
console.log(array);

// // //Ejercicio nivel 2:
// // let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// // //Podemos crear un array de forma moderna solo haciendo name_array = [string];
// // let textArray = text.split(" ");

// // console.log(textArray);
// // //Primero eliminar todos los signos de puntuacion es decir los puntos y comas y de paso el ' que usamos al transformar string en array
// // for (let i = 0; i<textArray.length; i++){
// //     let caracter = textArray[i]
// //     console.log(caracter)
// //     for(let j = 0; j<caracter.length; j++){
// //         if(caracter[j] == '.' || caracter[j]  == ',' || caracter[j] == "'"){
// //             textArray.splice(i,1);
// //         }
// //     }
    
// // }
// // console.log(textArray);
//Mi idea tenia algo de sentido sin embargo recordando que el metodo replace es un metodo directo de los strings y mas no de los
//arrays entonces lo que podemos hacer es usar una expresion regular para eliminar los signos de puntuacion esta expresion regular
//sirve para filtrar o encontrar de manera optima caracteres dentro de una cadena de texto

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
//usamos un regex para buscar los signos de puntuacion y cambiarlo de modo que vamos a aplicar esto a otra variable
//sintaxis let variable = texto.replace(/[elementos]/g,'lo que vamos a reemplazar')
let textoLimpio = text.replace(/[.',;:]/g,'');
console.log(textoLimpio);
//Para separar por cada letra seria '' pero por espacios debo usar  ' '
let words = textoLimpio.split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
let alergico = false;
if(alergico){
    const productoAlergico = 'Honey';
    const indice =  shoppingCart.indexOf(productoAlergico);
    //puedo buscar el indice de ese producto al que se es alergico de modo que me devuelva su indice
    console.log(indice);
    shoppingCart.splice(indice,1);
    console.log(`Su carrito es: ${shoppingCart}`);
}else{
    console.log(`Usted no es alergico: ${shoppingCart}`);
}

const modificador =  shoppingCart.indexOf('Tea');
console.log(modificador);
shoppingCart[modificador] = 'Green Tea';
console.log(shoppingCart);

const paises = ['Ecuador', 'Colombia', 'Perú', 'Chile', 'Argentina', 'Bolivia' , 'China' , 'Egipto'];
console.log(paises);
let encontrar = paises.includes('Etiopia');
console.log(encontrar);
if(encontrar){
    console.log('Pais incluido')
}else{
    paises.push('Etiopia');
    console.log(paises);
}

console.log(itCompanies);
if(itCompanies.includes('Sass')){
    console.log('Sass es un preproceso de CSS');
}else{
    itCompanies.push('Sass');
    console.log(itCompanies);
}

const fr = ["HTML", "CSS", "JS", "React", "Redux"];
const br = ["Node", "Express", "MongoDB"];

console.log(fr.concat(br));

const ages = [19, 22, 19, 24, 20, 25, 26,  25, 24,11];
console.log(ages.sort());
console.log(`Edad minima: ${ages[0]}`);
console.log(`Edad maxima: ${ages[ages.length-1]}`);
if(ages.length % 2 == 0){
    //es un valor para por ende debo tomar el promedio de los dos valores
    let promedioEdad = (ages.length / 2);
    console.log(promedioEdad);
    prE = promedioEdad - 1;
    let valorPr = ((ages.length[prE] + ages.length[prE]) / 2);
    console.log(`Edad promedio: ${ages[prE]}`);
}else{
    let promedioEdad = (ages.length / 2);
    console.log(promedioEdad);
    promedioEdad = Math.round(promedioEdad);
    prE = promedioEdad;
    console.log(`Edad promedio: ${ages[prE]}`);
}
let suma = 0;
for(let i = 0; i < ages.length; i++){
    suma = suma + ages[i];
}
 console.log(suma);
 let promedioSuma = (suma / ages.length);
 console.log(promedioSuma);
 console.log((suma / ages.length).toFixed(0));

 console.log((ages[ages.length-1] - ages[0]));

console.log(Math.abs(ages[0]-promedioSuma));

console.log(Math.abs(ages[ages.length-1]-promedioSuma));

console.log(paises.splice(0,4));
//No olvidar que tengo el splice que modifica mi valor original del arrray