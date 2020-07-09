function isUppercase(str) {
  // rtn T if every char is non-alpha or uppercase alpha; otherwise, rtn F
  // return str.split('').every(char => /[^a-z]/i.test(char) || /[A-Z]/.test(char));

  return !/[a-z]/.test(str); // rtn F if any lowercase alpha chars found; otherwise rtn T
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
