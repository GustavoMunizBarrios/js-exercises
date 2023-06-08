/* Se nos presenta un arreglo de enteros, éstos representan el valor de una acción con el pasar del tiempo.
 ¿El objetivo del ejercicio? Encontrar cuál es la máxima ganancia posible de comprar en un momento y 
 vender en otro posterior. */
//La compra debe ocurrir antes que la venta 

function MaxValue (shares) {
  // Your code here:
  //            =  4
  let minPrecio = shares[0]; // Precio mínimo inicial
  let maxGanancia = 0; // Ganancia máxima inicial
  //       i= 4   i < 5     
  for (let i = 1; i < shares.length; i++) {
    //                 = 11
    const precioActual = shares[i];

    // Actualiza el precio mínimo si es menor que el actual
    //        = 2
    minPrecio = Math.min(minPrecio, precioActual); //Math.min(a, b) devuelve el valor mínimo entre a y b

    // Calcula la ganancia utilizando Math.max
    //          =  9         0, 11-2
    maxGanancia = Math.max(maxGanancia, precioActual - minPrecio);
  }

  return maxGanancia;
}
console.log(MaxValue( [4, 3, 2, 5, 11] ));

module.exports = MaxValue
