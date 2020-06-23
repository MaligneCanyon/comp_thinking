// abstractions:
// - split the str into an arr of chars
// - for each char in the arr
//   - slice off a subset of the arr, from the arr begin to the current elem, to a subarr
//   - join the chars in the subarr to form a substr
//   - map the substr to the original arr
// - rtn the arr

function substringsAtStart(str) {
  return str.split('').map((elem, ndx, arr) => arr.slice(0, ndx + 1).join(''));
}

console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
