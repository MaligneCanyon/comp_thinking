// inputs:
// - arr (of ints)
// outputs:
// - int (sum of seqs of ints)
// reqs:
// - take an arr of ints
// - for each arr elem, compute a subtotal as the sum of it and the preceding arr elems
// - rtn the sum of the subtotals
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - for each elem of the arr
//   - reduce a subset of the arr, from the arr begin to the current elem, to a subtotal
//   - map the subtotal to the current arr elem
// - reduce the arr of subtotals to a total and rtn its value

// function sumOfSums(arr) {
//   return arr.map((elem, ndx) => arr.slice(0, ndx + 1).reduce((accum, value) => accum + value))
//     .reduce((accum, value) => accum + value);
// }

// rules:
// - by inspection, the total is
//   arr[0] * arr.length + arr[1] * (arr.length - 1) + ... + arr[arr.length - 1] * 1
function sumOfSums(arr) {
  return arr.reduce((accum, elem, ndx) => accum + elem * (arr.length - ndx), 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35
