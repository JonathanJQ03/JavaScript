/*
    Ya aprendido lo basico para que sirve el uso de console.log que nomas puedo imprimir como saber que tipo de datos puedo 
    imprimir por consola, que la lista es un objeto especial que se declara con [] y el objeto en si con {} ademas que con 
    console.log puedo imprimir varios valores e incluso usar el for of recordando que este imprime directamente los valores
    de los elementos de la lista y por ultimo recordando los tipos de variables let y const y como imprimir en una sola o varias
    lineas.
*/

// TIPOS DE DATOS:
/*
recordando un poco ya vimos los tipos de datos, como imprimir el tipo de datos ahora vamos a ver algo mas.
1. Datos primitivos: Tipos de datos que no podemos modificarlos pero si reasignarse su valor
- Podemos comparar por tipo "==" o por contenido con "==="
let hola = 2;
let hola = 3; -> como podemos ver sucede un error al intentar modificar este tipo de datos
- los datos primivitos son todos aquellos que no hacen referencias a objetos o matrices
2. Tipos de datos no primitivos: Tipos de datos que si podemos modificarlos una vez ya declarado su valor 
- Aqui tenemos a los objetos, listas y matrices
- No podemos comparar directamente unicamente obtener comparaciones si hacemos referencias al mismo tipo de objeto en MEMORIA
let obj1 = { nombre: "Juan" };
let obj2 = { nombre: "Juan" };

console.log(obj1 === obj2); // ❌ false (Son objetos distintos en memoria)

let obj3 = obj1; // Ambas variables apuntan al mismo objeto en memoria
console.log(obj1 === obj3); // ✅ true (Misma referencia en memoria)
*/

//curiosidad: podemos generar numeros aleatorias que van desde 0 a 0.999 entonces podemos jugar con sus valores valores sacar un valor
let numrand = Math.random();
console.log(numrand);
//pero si juego con su logica entonces
let numrand1 = Math.random() * 10;
console.log(Math.round(numrand1));

//Strings: No olvidar que son cadenas de texto y que tenerlas "" son cadenas de texto vacia sin nada de contenido dentro de ella
//Concatenación: El tener dos o mas cadenas unidad mediante el uso de el operador "+"
let nombre = "Juan";
let apellido = "Perez";
//El usar el operando + es una forma antigua y puede ser propensa a errores por eso ahora usamos 
console.log(nombre + " " + apellido);
//Puedo usar una sola variable que concatene varias cadenas a la vez:
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
//Si tenemos cadenas de texto demasiado largas podemos usar la barra invertida para indicar que se continua a la siguiente linea
const presentacion = 
    'Hola mi nombre es Jonathan\
    aprendo de programacion en JS\
    para ser un mejor programador';
//no olvidar que las comillas deben ir en la posicion correcta para poder continuar la cadena de texto a la siguiente linea
console.log(presentacion); 

//No olvidar que podemos tener literales de plantilla es decir inyectar datos como expresiones dentro de una plantilla ${}
//Ademas estas expresiones dentro pueden cambiar en torno al valor que mantengan la variable inyectada
const nombreCompleto2 = `Hola mi nombre es ${nombre} ${apellido}`; //Inyectamos valores de nombre y apellido como expresiones
console.log(nombreCompleto2);
//Esto que acabamos de ver se comenzo a usar en la ES6 y es mejor inyectar antes que concatenar con el uso de +
//Y es mas conocida como plantilla de cadena o un metodo de interpolar cadenas 
/*
Ademas que podemos hacer lo mismo de manera mas simple como.
let a = 5, b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}.`); si nos fijamos podemos hacer operaciones aritmeticas dentro de la plantilla
sin necesidad de abrir y cerrar a cada ratos las comillas
*/
let a = 5, b = 10;
console.log(`La suma de ${a} y ${b} es ${a + b}.`);
//E incluso podemos usar operaciones ternarias dentro de estas mismas
console.log(`${a} es mayor que ${b}: ${a > b}`);

//Recordando que casi todo en js es un objeto entonces podemos tener matodos con esos objetos de modo que 
let lenguaje = "ESPAÑOL";
console.log(lenguaje.toLowerCase());
console.log(lenguaje.length);

//podemos acceder a los valores dentro de una cadena de texto de manera que cada valor comienza desde 0 hasta n-1 caracteres
let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); 
//El metodo substr extrae desde donde y cuantos caracteres extraigo de una cadena pero esta en desuso
//Por ende desde ahora usamos el slice o el substring indicando de donde a donde cortamos la cadena de texto
//El mas usado es el slice de modo que aqui si importa caracteres negativos y en el substring no
let lenguaje1 = "JavaScript";
console.log(lenguaje1.slice(0, 10));
console.log(lenguaje1.substring(4, 10));
//Usado para cuando necesitamos dividir un string acorde un criterio (aqui va el criterio de division)
let abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(abecedario.split(""));
//trim(): Elimina el espacio final al principio o al final de una cadena.
let texto = "   Hola mundo   ";
console.log(texto.trim());
//includes(): permite saber si existe un texto IGUALITO dentro de una cadena y devuelve un booleano
let texto1 = "30 Days Of JavaScript";
console.log(texto1.includes("Days")); 
console.log(texto1.includes("days"));
//replace(): toma un valor dentro de la cadena y lo reemplaza por otro
let l = "30 Days Of JavaScript";
//toma el valor de javascript y lo cambia por python pero ojo debe ser IGUALITA
console.log(l.replace("JavaScript", "Python")); 
//charAt(): Toma índice y devuelve el contendio de la cadena en ese índice
let texto2 = "30 Days Of JavaScript";
for (const i of texto2) {
   console.log(i);
}
// No olvidar que los espacios tambien cuentan como valores numericos dentro de la cadena de texto
//indexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1
let d = "Feel it in my life";
console.log(d.indexOf("it")); //al existir si me devuelve la posicion

console.log(d.indexOf("feel")); // al devolverme -1 no existe
console.log(d.indexOf(" ")); //al devolverme -1 no existe
let e = "Feel it in it my life";
//lastIndexOf(): devuelve la ultima posicion donde se encuentra esa sub cadena por ejemplo en 
console.log(e.lastIndexOf("it"));// tenemos dos it dentro de mi cadena
//concat(): une dos o mas cadenas en una sola sin espacios
let u = "u";
let n = "n";
let o = "o";
//primero debo concatenarlas:  
let uno = "";
console.log(uno.concat(u,n,o));

//startsWith: toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. 
//Devuelve un valor booleano (verdadero o falso).
let f = "foquita";
console.log(f.startsWith("foquita"));
console.log(f.startsWith("foquito"));

//endsWith: toma una subcadena como argumento y verifica si la cadena termina con esa subcadena especificada. 
//Devuelve un valor booleano (verdadero o falso).
let g = "la madafakin foquita";
//puede terminar en este caso con una palabra pero tmb con letra o frase
console.log(g.endsWith("foquita")); 
console.log(g.endsWith("a"));
console.log(g.endsWith("foquito"));

//search(); busca la primera coincidencia y devuelve el primer valor en la posicion
let h = "gato";
console.log(h.search("t"));

//repeat(); repite la cadena tantas veces como se indique sin espacios
let i = "gato";
console.log(i.repeat(3));

//podemos usar el typeof para saber el tipo de dato de una variable
let j = "gato";
console.log(typeof j);

//CASTING: Es la conversion de un tipo de dato a otro mediant3
//1. parseInt(): Convierte un string en un entero siempre y cuando sea un numero como string mas no un texto
let k = "123";
k = parseInt(k);
console.log(typeof k);

//2. parseFloat(): Convierte un string en un float siempre y cuando sea un numero como string mas no un texto
let y="123.45";
y= parseFloat(y);
console.log(typeof y);

//3. parseInt(): tmb sirve para pasar de flotante a entero pero solo eliminamos la parte decimal lo devuelve como entero
let z = 123.99;
z = parseInt(z);
console.log( z);
console.log(typeof z);

//Realizar el reto:
let desafio  = '30 días de Javascript';
console.log(desafio);
console.log(desafio.length);
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
console.log(desafio.slice(0,2));
console.log(desafio.slice(3,21));
console.log(desafio.includes('Script'));
console.log(desafio.split(' '));
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(empresas.split(','));
console.log(desafio.replace('Javascript', 'Python'));
console.log(desafio.charAt(15));
console.log(desafio.charCodeAt(j));
console.log(desafio.indexOf('a'));
console.log(desafio.lastIndexOf('a'));
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(oracion.indexOf('porque'));
console.log(oracion.lastIndexOf('porque'));
console.log(oracion.search('porque'));
console.log(desafio.trim());
console.log(desafio.startsWith('30'));
console.log(desafio.endsWith('Javascript'));
console.log(desafio.match('a'));
let nueva = '';
console.log(nueva.concat('30 dias de', ' Javascript'));
console.log(desafio.repeat(2));

//Nivel 2:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(typeof '10' === typeof 10 );
console.log(typeof Number('10') === typeof 10 );
let palabra1 = "Python";
let palabra2 = "jerga";

console.log(palabra1.includes("on")); // true
console.log(palabra2.includes("on")); // false

let palabra3 = 'Espero que este curso no esté lleno de jerga.'
console.log(palabra3.includes('jargon'));

let numeroRandomico = Math.random()*10;
console.log(Math.round(numeroRandomico));

let numeroRandomico2 = (Math.random()*10) + 50;
if (numeroRandomico2 > 50 && numeroRandomico2 < 100) {
    console.log(Math.round(numeroRandomico2));
} 

console.log(desafio[Math.round(numeroRandomico)]);
console.log(
    '1 1 1 1 1\
    2 1 2 4 8\
    3 1 3 9 27\
    4 1 4 16 64\
    5 1 5 25 125'
);
