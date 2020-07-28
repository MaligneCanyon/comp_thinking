// inputs:
// - str
// outputs:
// - boolean
// reqs:
// - rtn T if all alpha chars in input str are uppercase; F otherwise
// rules:
// - ignore non-alpha chars
// testcases:
// - as below
// struct:
// - str
// algo:
// - for each char in the str
//   - if the char is alpha
//     - if the char is not uppercase
//       - rtn F
// - rtn T

// function isUppercase(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (/[a-z]/.test(str[i])) return false;
//   }

//   return true;
// }

function isUppercase(str) {
  // return !str.split('').some(char => /[a-z]/.test(char));
  return !/[a-z]/.test(str); // rtn F if any lowercase alpha chars found; otherwise rtn T
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
