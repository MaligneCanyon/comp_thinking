function leadingSubstrings(str) {
  return str.split('').map((elem, ndx) => str.slice(0, ndx + 1));
}

// abstractions:
// - split the str into an arr of chars
// - for each char in the arr
//   - slice off a substr, from the current char to the end of the str
//   - determine the substrs of the current substr by calling leadingSubstrings()
//   - map the result to the arr
// - flatten and rtn the arr

function substrings(str) {
  return str.split('').map((char, i) => leadingSubstrings(str.slice(i))).flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
