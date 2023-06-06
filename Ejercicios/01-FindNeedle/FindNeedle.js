function FindNeedle (haystack, needle) {

/*   ----Option 1---------- */
  // Recorrer cada caracter del haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) { //* NOTA
    let found = true;
    // Verificar si los caracteres coinciden
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) { //Si no son iguales se sale del for con break"(let j = 0; j < needle.length; j++)" 
        found = false; 
        break;
      }
    }
    // Si encontramos una coincidencia, retornar el índice
    if (found) {
      return i;
    }
  }
  return -1

  //----Option 2----------

/*   for (let i = 0; i < haystack.length; i++) {
    if( haystack.slice(i, i + needle.length) === needle) return i
  }
  return -1 */
};
//*NOTA: 
/* La razón de restar needle.length es que no tiene sentido continuar verificando si el needle puede
encajar completamente en el haystack si quedan menos caracteres disponibles en el haystack que los 
caracteres del needle. Si la longitud restante del haystack es menor que la longitud del needle, no 
es posible encontrar una coincidencia completa. */
module.exports = FindNeedle


console.log(FindNeedle('react-redux', 'redux'))//(6)
console.log(FindNeedle('pinky', 'puntual'))//(-1)
console.log(FindNeedle('rereredux', 'reredux'))//(2)
console.log(FindNeedle('hola como has estado', 'has'));//10
