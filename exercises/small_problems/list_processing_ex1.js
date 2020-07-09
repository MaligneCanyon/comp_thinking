// abstractions:
// - convert the num to a str
// - split the str into an arr of chars
// * map the arr of chars to an arr of digits
// * reduce the arr of digits to a sum

function sum(num) {
  let arr = String(num).split('').map(elem => Number(elem));
  // console.log(arr);
  return arr.reduce((accum, elem) => accum + elem, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
