// abstractions:
// - for each elem of the arr
//   * reduce a subset of the arr, from the arr begin to the current elem, to a subtotal
//   * map the subtotal to the current arr elem
// * reduce the arr of subtotals to a total and rtn its value

function sumOfSums(arr) {
  return arr.map((elem, ndx) => arr.slice(0, ndx + 1).reduce((accum, value) => accum + value))
    .reduce((accum, value) => accum + value);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
