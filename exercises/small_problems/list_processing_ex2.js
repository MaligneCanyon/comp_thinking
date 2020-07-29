// inputs:
// - arr (ints 0..19)
// outputs:
// - arr (sorted ints)
// reqs:
// - take an arr of ints and rtn an arr that is sorted based on the English word equiv of those ints
// rules:
// - ndx of English word equivs is equiv to the numerical value of each int
// test cases:
// - as below
// struct:
// - arr
// algo:
// - init a const arr w/ the English word equivs of ints 0..19
// - map the input arr to the English word arr
// - sort the mapped arr lexographically
// - map the sorted arr back to its numeric equiv values
// - rtn the sorted arr

function alphabeticNumberSort(arr) {
  const NUM_WORDS = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  return arr.map(elem => NUM_WORDS[elem]).sort().map(elem => NUM_WORDS.indexOf(elem));
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
