// inputs:
// - arr (of strs)
// outputs:
// - arr (of strs)
// reqs:
// - take an arr of strs and rtn T an arr of the same strs w/ vowels removed
// rules:
// - vowels are aeiou
// testcases:
// - as below
// struct:
// - arr
// algo:
// - for each str in the arr
//   - split the str into an arr of chars
//   - filter out chars that are vowels
//   - join the arr of filtered chars to form a new str
//   - map the new str back to a new arr
// - rtn the new arr

// function removeVowels(arr) {
//   return arr.map(str => str.split('').filter(char => /[^aeiou]/i.test(char)).join(''));
// }

function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/gi, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
