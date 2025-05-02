/*
    Imprimir un mensaje por consola me sirve para:
    1. Depurar el codigo, ver valores de las variables
    2. Controlar y seguir el flujo de ejecucion del programa
    3. Identificar errores logicos en las variables
    4. Medir tiempos de ejecución
*/
//Impresión de un solo argumento o de varios al mismo tiempo
console.log("Hola Mundo");
console.log("Jonathan", "Jaguaco" , 21);
//Tambien podemos imprimir resultados aritmeticos
console.log((5+5)*(80-50));

//Tipos de datos:
let nombre = "Javier";
let edad = 21;
let humano = false;
//cuando no asignamos valor a una variable esta sera undefined
let perro 
let gato = null;
console.log(typeof nombre, typeof edad, typeof humano, typeof perro, typeof gato);

//Variables: Contenedores que se llena con la información que estamos designando dentro de esta
//Recordar que las variables siguen CamelCase, no empiezan con numeros y no llevan signos a menos que sea $ y _
//let: variable con valores que van a cambiar
let años;
//const: variable con datos que NO van a cambiar
const gravedad = 9.8;
//podemos almacenar varios tipos de datos dentro de una misma variable pero este debe tratarse como objeto
//recordando que la lista es un tipo especial de objeto y se declara con [] y el objeto en si con {}
let información = ["Jonathan","Jaguaco",true,21,"Ecuador"]
console.log(typeof información);
for (const valor of información) {
    console.log(valor);
    console.log(typeof valor);
}

//Podemos escribir los valores de las variables en una sola linea
//Cada variable viene siendo diferente e independiente de la otra lo unico q comparten es el tipo de variable
let nombre1 = "Jonathan", apellido1 = "Jaguaco", estadoCivil1 = "Soltero", pais1 = "Ecuador", edad1 = 21;
console.log("Mi nombre es: " + nombre1 + " " + apellido1 + ", tengo " + edad1 + " años, soy " + estadoCivil1 + " y vivo en " + pais1);
