function SumArray (arr, n) {
  //[2, 4, 5, 9], 11
  for (let i = 0; i < arr.length - 1; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] + arr[j] === n) {
        return true; // Si encontramos dos números que suman el número dado, retornamos true
      }
    }
  }
  return false; // Si no se encontraron dos números que sumen el número dado, retornamos false
}
const arr = [2, 4, 5, 9]
const num = 11

console.log(`La suma de dos numeros cualesquiera en el array [${arr}] da como resultado ${num} ? ${SumArray(arr, num)}`);

module.exports = SumArray
