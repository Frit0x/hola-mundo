'use strict'

/*
Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales
*/
/*
Si los datos no son números o menores o iguales a cero, que los vuelva a pedir.
*/

var numero1 = parseInt(prompt('Introduce el primer número',0));
var numero2 = parseInt(prompt('Introduce el segundo número',0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer número',0));
    numero2 = parseInt(prompt('Introduce el segundo número',0));
}

if(numero1 == numero2){
    alert("LOS NUMEROS SON IGUALES")
} else if(numero1 > numero2){
    alert("EL NUMERO MAYOR ES: " + numero1);
    alert("EL NUMERO MENOR ES: " + numero2);
} else if(numero2 > numero1){
    alert("EL NUMERO MAYOR ES: " + numero2);
    alert("EL NUMERO MENOR ES: " + numero1);
}else{
    alert("Introduce un número válido");
}