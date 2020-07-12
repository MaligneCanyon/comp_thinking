function leadingSubstrings(str) {
  return str.split('').map((elem, ndx) => str.slice(0, ndx + 1));
}

function substrings(str) {
  return str.split('').map((char, i) => leadingSubstrings(str.slice(i))).flat();
}

// abs:
// - call substrings() to determine the substrs of a str
// - for each substr
//   - if the substr is not single-char and the str equals the reverse of the str
//     - filter the substr
// - rtn the filtered substrs

function isPalindrome(str) {
  return str.length > 1 && str === str.split('').reverse().join('');
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
