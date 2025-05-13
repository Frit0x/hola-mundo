'use strict'

/*
Utilizando un bucle, buscar la media y la suma de varios números hasta que introduzca un número negativo 
*/

var suma = 0;
var contador = 0;

do{
var numero = parseInt(prompt('Introduce número hasta introducir un número negativo',0));
    if (isNaN(numero)){
        numero = 0;
    } else if (numero >= 0){
        suma = suma + numero;

        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0)

    alert("La suma de todos los números es: "+ suma);
    alert("La media de todos los números es: "+ (suma/contador))