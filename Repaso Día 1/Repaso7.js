//Funciones: pedazos de codigo q son reutilizables 
//declaracion function nombreFuncion (argumentos){ codigo};

//Una funcion hace un codigo facil de leer, reutilizable, facil de probar y de mantener
//Tenemos diferentes tipos de funciones en JS

//1. Funcion declarativa: se llama asi ya que se debe declarar -function- para poder ser usada
//function nombreFuncion (argumentos o no){codigo};

function nombre (nombre){
    console.log(`Hola ${nombre}`);
}
nombre("Jonathan");

//Funciones sin parametros ni return son usadas debido a que hacen tareas generales y de manera muy comun

//funciones que retornan valores: funciones que usan return
function sumas (n1,n2,n3){
    let resultado = n1 + n2 + n3;
    return resultado;
}
//como podemos ver tenemos la agilidad de enviar valores desde un console del modo que retornaremos el valor
console.log(`Valor de la suma es: ${sumas(2,3,5)}`);

//Funciones con numeros ilimitados de parametros: Al no conocer cuantos argumentos van a ser enviados entonces debemos
function sumAllNums() {
    console.log(arguments)
    let total = 0;
    //aqui tmb se recorre pero ya no se usa este metodo
    for (const element of arguments) {
        total = total + element;
    }
    console.log(total);
   }
   
   sumAllNums(1, 2, 3, 4);
//Actualmente se encuentra desaprobada esta medida entonces para usar funciones flecha y declarativa con un numero ilimitado
//de argumetos optamos por usar ...rest de modo que podemos usar cualquier cantidad de argumentos y los convertimos en un array
//por lo cual podemos usar sus metodos

function sumar (...numeros){
    //Por lo que vemos que podemos tener solo los argumentos como un arrray de forma mas simplificada
    console.log(numeros);
}

sumar(1,2,3,4,5,6,7,8);

function sumass(...numeros){
    let total = 0;
    //Aqui notemos como numeros gracias a ...rest se convierte en un array y podemos recorrerlo tranquilamente
    for (const element of numeros) {
        total = total + element;
    }
    console.log(total);
}
sumass(5,5,5,5,5);

//Funcion anonima: funciones que no tienen nombre, que se guardan en variables y pueden ser usadas en otras partes del codigo
const resta = function(a,b){
    console.log(a-b);
}
resta(10,58);

//Funcion de expresión: Es la anonima pero con la diferencia que retorna un valor
const restas = function(a,b){
    return a-b;
}
//Podemos imprimir directamente o guardar en una variable
let valorr = restas(12,45);
console.log(restas(10,58));
console.log(valorr);

//funciones de autoinvocacion: funciones que se ejecutan automaticamente despues de ser declaradas
(function() {
    console.log("¡Esta es una IIFE!");
  })();
//se ejecuta apenas se es declarada de manera que no necesita ser llamada para ser usada

//funcion flecha: forma de escribir una funcion pero con la diferencia de la declarativa es que; se usa una flecha en lugar de 
//la palabra reservada function 
const fullName = (f,a) =>{ return `Tu nombre es ${f} ${a}`};
console.log(fullName('Jonathan','Jaguaco'));

//funcion con parametros por defecto: funciones declarativas que tienen valores por defecto en caso de no ser enviados por el usuario
function saludo (nombre = 'Javier'){
    console.log(`Hola ${nombre}`);
}
saludo('Jose');
saludo();
//Vemos diferentes impresiones pq podemos enviar o no parametros en la llamada de la funcion}
// Lo mismo aplica para las funciones flecha
let saludito = (nombre = 'Kevin') => {return `Hola ${nombre}`};

console.log(saludito());
console.log(saludito('Jonathan'));

//Ejercicios:

function fullNameTwo(a,b,c,d){
    console.log(`Tu nombre es ${a} ${b} ${c} ${d}`);
};

fullNameTwo('Jonathan','Jaguaco','Perez','Garcia');

function nombreComplete(a,b,c='Javier',d='Quituisaca'){
    console.log(`Tu nombre es ${a} ${c} ${b} ${d}`);
};
nombreComplete('Jonathan','Jaguaco');

let rectanguloArea = (b,h) => {
    //no olvidar que debemos declarar siempre la funcion al no hacerlo se vuelve global y puede ocasionar
    //que todas las area se sobreescrbian
    let area = b*h
    return area
};
console.log(rectanguloArea(10,5));

//en funciones flecha si no coloco las {} el return es explicito 
let rectanguloArea2 = (b,h) => b*h;
console.log(rectanguloArea2(10,55));

let perimeterRectanguloArea2 = (b,h) => 2*(b*h);
console.log(perimeterRectanguloArea2(10,55));

//comenzar por el ejercicio 11
//funcion flecha: (argumentos) => {codigo};
//No olvidar que si no colocamos {} el return es explicito y por ende se retorna un valor
const gravedad = 9.81;
let peso = (masa, gravedad) => masa*gravedad;
console.log(peso(30,gravedad));

let conversion = (GradosCentigrados) => (GradosCentigrados*(9/5)+32);
console.log(conversion(30));

//indice bmi = pesgo kg / (altura m cuadrados)
let bmi = (peso,altura) => (peso/(altura*altura));
/*
Menos de 18.5	Bajo peso
18.5 a 24.9	Peso normal
25 a 29.9	Sobrepeso
30 a 34.9	Obesidad tipo 1 (leve)
35 a 39.9	Obesidad tipo 2 (moderada)
40 o más	Obesidad tipo 3 (grave o mórbida)
*/

let informacion = (ibm) =>{
    if(ibm < 18.5) return 'Bajo peso';
    if(ibm >= 18.5 && ibm < 24.9) return 'Peso normal';
    if(ibm >= 25 && ibm < 29.9) return 'Sobrepeso';
    if(ibm >= 30 && ibm < 34.9) return 'Obesidad tipo 1';
    if(ibm >= 35 && ibm < 39.9) return 'Obesidad tipo 2';
    if(ibm >= 40) return 'Obesidad tipo 3';
}
//estoy enviando una funcion como argumento pero teniendo en cuenta que esa funcion me va a retornar un valor para la funcion mas externa
//esto es posible gracias a la jerarquia de operaciones
console.log(informacion(bmi(70,1.70)));

let checkSeason = (mes) =>{
    switch(mes){
        case 'Diciembre':
        case 'Enero':
        case 'Febrero':
            console.log('Es invierno');
            break;
        case 'Marzo':
        case 'Abril':
        case 'Mayo':
            console.log('Es primavera');
            break;
        case 'Junio':
        case 'Julio':
        case 'Agosto':
            console.log('Es verano');
            break;
        case 'Septiembre':
        case 'Octubre':
        case 'Noviembre':
            console.log('Es otonio');
            break;
        default:
            console.log('Ingrese un mes valido');
            break;
    }
}
//Tomar en cuenta que si afecta las mayusculas y minusculas dentro de estos parametros
checkSeason('Septiembre');

let findMax = (a,b,c) =>{
    if(a > b && a > c) return a;
    if(b > a && b > c) return b;
    if(c > a && c > b) return c;
};

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//Resolver una ecuacion linea: ax + by + c = 0
let equationLineal = (a, b, c, x) => {
    let y = (-c / b) - ((a / b) * x);
    return y;
};

console.log(equationLineal(1, 2, 3, 10));

//resolver una ecuiacion cuadratica: ax^2 + bx + c = 0
let equationCuadratic = (a,b,c) =>{
    let discriminante = b*b - 4*a*c;
    let x = 0;
    if(discriminante == 0){
        x = (-b/2*a);
        console.log(`Solucion: ${x}`);
    }else if(discriminante > 0){
        x1 = ((-b + Math.sqrt(discriminante)) / (2*a));
        x2 = ((-b - Math.sqrt(discriminante)) / (2*a));
        console.log(`Soluciones: ${x1} y ${x2}`);
    }else{
        console.log('La ecuacion no tiene raices reales');
    }
}
//La finalidad es encoentrar las raices unicamente
// equationCuadratic(1, 0, 0);
// equationCuadratic(1, 0, 2);
equationCuadratic(1,4,4);
equationCuadratic(1,-1,-2);

function printArray(matriz){
    for (const element of matriz) {
        console.log(element);
    }
}
let arrayNums = [1,2,3,4,5,6,7]
printArray(arrayNums);

/*
Recordando el objeto date:
- Se lo declaraba como un objeto: let fecha  = new Date();
- Los metodos son: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getTime()
*/
function showDateTime(){
    let fecha = new Date();
    //no olvidar q debemos obtener el dia de la semana con getDAte y el get month comienza desde 0 por se sumna  mas 1 para igualarnos
    fecha = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
    return fecha;
}
console.log(showDateTime());

let swapValores = (x,y) => {
    let aux = x;
    x = y;
    y = aux;
    return [x,y]
    
}
//puedo imprimir valores desde los indices si resulta q se me retorna una matriz desde la funcion
console.log(`y: ${swapValores(1,2)[1]} y x:${swapValores(1,2)[0]}`);

let reverse =  (matriz) => {
    let matrizReversa = [];
    for (let j = matriz.length -1 ; j > -1 ; j--) {
        let auxiliar = matriz[j];
        matrizReversa.push(auxiliar);
    }
    return matrizReversa;
}
console.log(reverse([1,2,3,4,5]));
console.log(reverse(['J','V','A']));

//Capitalizar palabras= Colocar la primera letra de la palabra en mayuscula
//recordando que slice recorta una palabra de ese array 
 let capitalizar = (palabra) => {
    //cortamos desde la posicion 0, la cantidad de un solo valor
    let primeraLetra = palabra.slice(0,1);
    //si coloco un solo valor se recortara desde esa posicion hasta el final
    //no olvidar q contamos posiciones desde el 0
    let restoPalabra = palabra.slice(1)
    primeraLetra = primeraLetra.toUpperCase();
    //no olvidar q concat es un metodo dentro del mundo de los strings
    let palabraCapitalizada = primeraLetra.concat(restoPalabra);
    return palabraCapitalizada
 }

 console.log(capitalizar('jonathan'));
 console.log(capitalizar('javier'))

let arrayItems= [];
let agregarItem = (item) => {
    //push del mismo modo lo que hace es modificar el array original y agregar un nuevo valor
    //manteniendolo asi actualizado
    arrayItems.push(item)
    return arrayItems
};
console.log(agregarItem('Javier'));
console.log(agregarItem('Jonathan'));
console.log(agregarItem('Javier'));
 
//continuar con los ejercicios del nivel dos parte 9
//Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
//recordando que splice me modifica directamente el array
let removeIntem = (position,arrayOne) =>{
    
    arrayOne.splice(position,1);
    return arrayOne;
}

let arrayOne = [1,2,3,4,5,6,7,8,9,10];
let position = 4;
console.log(removeIntem(position,arrayOne));

//Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
let numberOne = 23;
let numberTwo = 13;
let testNumbers = (numberOne,numberTwo) => {
    let numbers = [];
    if(numberOne > numberTwo){
        //Un if si me modifica los valores originales
        let aux = numberOne;
        numberOne = numberTwo;
        numberTwo = aux;
        numbers = [numberOne,numberTwo];
        return numbers;
    }
    numbers = [numberOne,numberTwo];
    return numbers;
}
//tengo de retorno mis datos para
let numbersSort = testNumbers(numberOne,numberTwo);
console.log(numbersSort);

let addRange = (numberOne,numberTwo) =>{
    let total = 0;
    for(let i = numberOne; i < numberTwo + 1; i++){
        total = i + total;
    }
    return total;
}
console.log(addRange(numbersSort[0],numbersSort[1]));

//Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango

let sumOfOdds = (number)=>{
    let total = 0;
    if(number < 0){
        for (let i = 0; i > number-1; i--) {
            if(i % 2 != 0){
                total = total + i;
            }
        }
        return total;
    }
    for (let i = 0; i < number+1; i++) {
        if(i % 2 != 0){
            total = total + i;
        }
    }
    return total;
}
console.log(sumOfOdds(-7));

//Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango
let sumOfEven = (number)=>{
    let total = 0;
    if(number < 0){
        for (let i = 0; i > number-1; i--) {
            if(i % 2 == 0){
                total = total + i;
            }
        }
        return total;
    }
    for (let i = 0; i < number+1; i++) {
        if(i % 2 == 0){
            total = total + i;
        }
    }
    return total;
}
console.log(sumOfEven(-11));

//Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
let evensAndOdds = (entero)=>{
    let counterOdds = 0;
    let counterEvens = 0;
    for(i = 0; i<entero +1; i++){
        if(i%2 == 0){
            //hablamos de un numero par
            counterEvens++;
        }else{
            counterOdds++;
        }
    }   
    let counters = [counterEvens,counterOdds];
    return counters;
}

let counter = evensAndOdds(100);
console.log(`Pares : ${counter[0]}, Impares ${counter[1]}`)

//Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
let sumatorio = (...unknowNumbers) =>{
    let total = 0;
    for(let i = 0; i<unknowNumbers.length;i++){
        total = total + unknowNumbers[i];
    }
    return total;
}
console.log(sumatorio(12,23,1,23,12,45,23,42));

//Repasar como devolver varios parametros a la vez
//Listo para enviar varios valores dentro del return se debe almacenar todo dentro de un arrray o un objeto 
//De ese modo podemos desectraturas los arrays de modo que:
function exampleOne() {
    return [21,'Javier',2003,true];
}
//Como vemos se lograr crear un array con varios valores de retorno a su vez
console.log(exampleOne());
//Pero podemos desectrurar esto de modo que:
//tipo de variable [arrays con los nombres de la variable] = nameFunction();
//Al realizar esta desectructuracion entonces las variables se vuelven atomicas y pueden ser usadas en lo que desee
const [ageExample,nameExample,yearExample, maritalStatus] = exampleOne();
console.log(ageExample);

