// inputs:
// - 2 arrs
// outputs:
// - arr (sorted ints)
// reqs:
// - take two arrs of ints
// - rtn an arr that contains the numerically sorted products of all combinations of int pairs from
//   the two input arrs
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - init a new arr to []
// - for each elem of arr1
//   - for each elem of arr2
//     - multiply the elems and push them to the new arr
// - sort the new arr numerically and rtn the result

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  arr1.forEach(elem1 => arr2.forEach(elem2 => newArr.push(elem1 * elem2)));
  return newArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
