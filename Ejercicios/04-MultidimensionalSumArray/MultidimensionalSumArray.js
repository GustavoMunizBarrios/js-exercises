/*
El objetivo es encontrar la suma de todos los elementos del arreglo.

Ejemplos
mdArray: [1,2,3,4] | output: 10

mdArraySum: [ [2,4] , [1], [4,2,1] ] | output: 14

mdArraySum: [ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ] | output: 26

IMPORTANTE
Para la resolución de este ejercicio no se puede utilizar el método Array.flat() */

function mdArraySum (arr) {
  // Your code here:
  let suma = 0;
  
  for (let i = 0; i < arr.length; i++) {
    //La función Array.isArray() devuelve true si el valor pasado como argumento es un arreglo
    if (Array.isArray(arr[i])) { //Si el elemento actual es un arreglo, se llama a la función 
      //sumarArreglo de forma recursiva para obtener la suma de ese subarreglo
      suma += mdArraySum(arr[i]);
    } else {
      suma += arr[i];
    }
  }
  
  return suma;
}
console.log(mdArraySum([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]));

module.exports = mdArraySum
