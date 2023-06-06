function FindNeedle (haystack, needle) {

  //----Option 1----------
  // for (let i = 0; i < haystack.length; i++) {
    // for (let j = 0; j < needle.length; j++) {
      // if(needle[j] !== haystack[i + j ]  ) break
      // if( j === needle.length - 1) return i
    // }
  // }
  // return -1

  //----Option 2----------

  for (let i = 0; i < haystack.length; i++) {
    if( haystack.slice(i, i + needle.length) === needle) return i
  }
  return -1
};

module.exports = FindNeedle


console.log(FindNeedle('react-redux', 'redux'))//(6)
console.log(FindNeedle('pinky', 'puntual'))//(-1)
console.log(FindNeedle('rereredux', 'reredux'))//(2)
