/*
    los booleanos son tipos de datos que me representan un valor true or false
    Recordar que:
    - Todos los numeros + y - excepto el 0 son verdaderos
    - Todas las acandeas son verdaderas a excepción de una cadena vacia ""
    - La valores valores falsos son: 0,null,undefined,NaN, '' o cualquier string vacio 
    Undefinded: Variable sin valor
    Null: variable con valor null

    Operadores de asignación: Operadores para asignar valores a variables
    =: Asignación
    +=: Suma y asignación
    -=: Resta y asignación
    *=: Multiplicación y asignación
    /=: División y asignación

    Operadores Aritméticos: Operadores para realizar operaciones matemáticas
    +: Suma
    -: Resta
    *: Multiplicación
    /: División
    %: Modulo (residuo, el restante de un division)
    **: Exponente

    Operadores de Comparación: Usados para comparar dos valores
    ==: Igual Valor
    ===: Igual Valor y Tipo de Dato
    !=: Diferente Valor
    !==: Diferente Valor y Tipo de Dato
    >: Mayor que
    <: Menor que
    >=: Mayor o igual que
    <=: Menor o igual que

    Operadores Logicos: 
    &&: Y lógico (Ambos valores deben ser verdaderos)
    ||: O lógico (Un valor debe ser verdadero)
    !: No lógico o  negación (El valor debe ser falso)

*/
//Operadores de incremento
let a = 10;
let b = 10;
//++variable: pre incremento primero incrementa el valor 
console.log(++a);
//variable++: post incremento primero imprime el valor y luego lo incrementa
console.log(b++);
console.log(b);

//Operadores de decremento
let c = 10;
let d = 10;
//--variable: pre decremento primero decrementa el valor
console.log(--c);
//variable--: post decremento primero imprime el valor y luego lo decrementa
console.log(d--);
console.log(d);

//Operadores ternarios: permiten escribir una condicion de forma simplificada
let estadoDia =  'soleado';
estadoDia == 'soleado'
    ? console.log("Necesitas una sombrilla para el sol")
    : console.log("No necesitas una sombrilla para el sol");

//Precedencia de Operadores: Cada operador en Js tiene una jerarquia establecida por lo cual podemos 
//realizar operaciones acorde esa jerarquia y del mismo modo podemos manipularlos


//Metodos Window:
//1. Alert(): Muestra un cuadro de alerta con un msj y boton aceptar
//alert('Dentro  el argumento a usarse');
//Usada mas comunmente cuando deseo probar y no usarlas en exceso.

//2. prompt(): Muestran un cuadro de solicitud toma valores de entrada y los puede almacenar en una variable
//recordar que si se envia el campo vacio nos esta retornando una cadena vacia mas no un valor nulo

//3. confirm():Muestra un mensaje en pantalla con aceptar o cancelar de modo que se retornara un true o un false

//Objeto Date: Permite trabajar con horas y fechas ademas de usar el get
//Para crear un objeto de tiempo debemos usar la palabra reservada new y asignarlo a un objeto
const horaActual = new Date();
console.log(horaActual);
// A continuacion vamos a hacer uso de los metodos get del objeto date
console.log(horaActual.getFullYear());
//getMonth(): devuelve el mes como un numero del 0 al 11 por eso los meses serian n - 1 al actual
console.log(horaActual.getMonth());
//getDate(): devuelve el dia de la semana 
console.log(horaActual.getDate());
//getDay(): devuelve el dia de la semana entre 0 siendo domingo a sabado siendo el 6
console.log(horaActual.getDay());
//getHours(): devuelve la hora del dia
console.log(horaActual.getHours());
//getMinutes(): devuelve los minutos del dia    
console.log(horaActual.getMinutes());
//getSeconds(): devuelve los segundos del dia
console.log(horaActual.getSeconds());
//getMilliseconds(): devuelve los milisegundos del dia
console.log(horaActual.getMilliseconds());
//getTime(): devuelve la cantidad de milisegundos desde el 1 de enero de 1970
console.log(horaActual.getTime());
//Podemos formatear los valores a un formato de tiempo mas legible para los humanos de modo que entendamos mejor
const now = new Date();
const year = now.getFullYear(); // return años
const month = now.getMonth() + 1; // return meses(0 - 11)
const date = now.getDate(); // return días (1 - 31)
const hours = now.getHours(); // return horas (0 - 23)
const minutes = now.getMinutes(); // return minutos (0 -59)


console.log(`${date}/${month}/${year} ${hours}:${minutes}`); 
//Usando el metodo de operadores lo que hicimos fue dar un formato mas legible y obtuvimos un mejor tiempo

let firstName =  'Javier'
let lastName = 'Garcia'
let country = 'Colombia'
let city = 'Bogota'
let age = 25
let isMarried = false
let years = 2022
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof years);
console.log(typeof '10');
console.log(typeof 10);
console.log(typeof '10' == typeof 10);
console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8'));
console.log(typeof parseInt('9.8') == typeof 10); // Este es igual pq ambas cadenas son numbers pero
console.log( parseInt('9.8') ==  10);//Es false pq el valor es 9 y el otro 10
console.log(('9.8') ===  10);//Es false pq el valor es 9 y el otro 10
/*
- Tener cuidado cuando comparamos con el typeof porque nos esta devolviendo un string y al ser una cadena de texto nos provoca
que compare valores de las cadenas de string por eso es falso
- Pero si comparamos los valores con == se hacen conversiones automaticas pero al hacer un === no se realizar esas conversiones
*/
console.log('11' == 11); //convierte el valor directamente
console.log('11' === 11); //no convierte el valor directamente
//Las declaraciones es introducir una variable en js 
let hola = false;
console.log(hola); 
let hola2 = null;
console.log(1>2);
console.log(1<2);
console.log(1==2);
console.log(1>=2);
console.log(1<=2);
console.log(1!=2);
console.log(1==2);
//Estas declaraciones son true or false acorde una operación logica o acorde un valor booleano previamente dado

//Podemos usar unos valores dentro del console de modo que convertimos una variable en su expresion booleana de modo que
console.log(Boolean(0));
console.log(Boolean(-12));
console.log(Boolean(''));
console.log(Boolean('hola'));

console.log((4>3),(4>=3),(4<3),(4<=3),(4==4),(4===4),(4!=3),(4!==4),(4!=4),(4=='4'),(4==='4'));

let python = 'python';
let jargo = 'jargo';
console.log(python.length < jargo.length);
/*
    Debemos recordar un poco esta logica:
    true && true  // true
    true && false // false
    false && true // false
    false && false // false

    true || true   // true
    true || false  // true
    false || true  // true
    false || false // false


*/
console.log(4>3 && 10<12);
console.log(4>3 && 10>12);
console.log(!(false));
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 === '4'));
let dragon = "dragon";
let pythonn = "python";
let resultado = dragon.includes("on") && pythonn.includes("on");
console.log(resultado);  // Esto confirmará si ambas cadenas contienen "on"

//Uso de Date:
let hoy = new Date();
console.log(hoy.getDay());
console.log(hoy.getFullYear());
console.log(hoy.getDate());
console.log(hoy);
console.log(hoy.getHours()+":"+hoy.getMinutes());
console.log(hoy.getTime());
//el get time me da los segundos transcurridos desde el 1 de enero de 1970 de modo que es un estandar para manejar tiempo
