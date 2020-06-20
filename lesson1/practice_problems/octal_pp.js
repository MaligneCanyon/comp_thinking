//   233                          // octal
// = 2*8^2 + 3*8^1 + 3*8^0
// = 2*64  + 3*8   + 3*1
// = 128   + 24    + 3
// = 155                          // decimal

// abstractions:
// - split the str into an arr of chars
// - reverse the arr
// - map each elem in the arr to its decimal equivalent based on the arr ndx
// - reduce the arr to a decimal total

function octalToDecimal(numStr) {
  let arr = numStr.split('').reverse();
  arr = arr.map((elem, ndx) => Number(elem) * Math.pow(8, ndx));
  return arr.reduce((accum, elem) => accum + elem, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

console.log(octalToDecimal('233'));         // 155
