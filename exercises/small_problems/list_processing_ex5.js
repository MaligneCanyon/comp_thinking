// abstractions:
// - split the str into an arr of chars
// - for each char in the arr
//   - slice off a subset of the arr, from the arr begin to the current elem, to a subarr
//   - join the chars in the subarr to form a substr
//   - map the substr to the original arr
// - rtn the arr

function leadingSubstrings(str) {
  // return str.split('').map((elem, ndx, arr) => arr.slice(0, ndx + 1).join(''));
  return str.split('').map((elem, ndx) => str.slice(0, ndx + 1));
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
