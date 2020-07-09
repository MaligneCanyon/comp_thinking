function substringsAtStart(str) {
  return str.split('').map((elem, ndx, arr) => arr.slice(0, ndx + 1).join(''));
}

// abstractions:
// - init a new arr to []
// - for each char in the str
//   - select a substr of the str, from the current char to the end of the str
//   - for each substr
//     - call substringsAtStart(substr) and push the result to the new arr
// - flatten the new arr and rtn the result

// function substrings(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr.push(substringsAtStart(str.slice(i)));
//   }

//   return arr.flat();
// }


// abstractions:
// - split the str into an arr of chars
// - for each char in the arr
//   - slice off a substr, from the current char to the end of the str
//   - determine the substrs of the current substr by calling substringsAtStart()
//   - map the result to the arr
// - flatten and rtn the arr

function substrings(str) {
  return str.split('').map((char, i) => substringsAtStart(str.slice(i))).flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
