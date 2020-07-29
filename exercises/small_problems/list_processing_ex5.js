// inputs:
// - str
// outputs:
// - arr (of substrs)
// reqs:
// - take a str arg
// - rtn a list of all substrs that start from the beginning of the str
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - split the str into an arr of chars
// - for each char
//   - map the substr from the beginning of the str up to and including the current char
// - rtn the mapped arr

function leadingSubstrings(str) {
  return str.split('').map((char, ndx) => str.slice(0, ndx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
