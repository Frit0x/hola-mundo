'use strict'

/*
Hacer un programa que muestre todos los números entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("Introduce el primer número",0));
var numero2 = parseInt(prompt("Introduce el segundo número",0));

document.writeln("<h1>De"+numero1+" a " +numero2+"están estos numeros: </h1>")
for(var i = numero1; i<=numero2; i++){
    document.writeln(i+"<br/>")
}