// inputs:
// - str
// outputs:
// - arr (of substrs)
// reqs:
// - take a str arg
// - rtn a list of all substrs that start from the beginning of the str, the 2nd char of the str,
//   the 3rd char of the str, etc
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - split the str into an arr of chars
// - for each char in the arr
//   - slice off a substr, from the current char to the end of the str
//   - determine the substrs of the current substr by calling leadingSubstrings()
//   - map the result to the arr
// - flatten and rtn the arr

function leadingSubstrings(str) {
  return str.split('').map((char, ndx) => str.slice(0, ndx + 1));
}

function substrings(str) {
  return str.split('').map((char, ndx) => leadingSubstrings(str.slice(ndx))).flat();
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
