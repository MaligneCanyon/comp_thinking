// inputs:
// - str
// outputs:
// - str
// reqs:
// - swap the case of every letter in the input str
// - rtn the revised str
// rules:
// - alpha lowercase if char in range [a-z]
// - alpha uppercase if char in range [A-Z]
// testcases:
// - as below
// struct:
// - arr
// algo:
// - split the str into an arr of chars
// - map the chars as follows:
//   - if the char is uppercase alpha, convert it to lowercase
//   - if the char is lowercase alpha, convert it to uppercase
//   - if the char is non-alpha, return the char
// - join the arr chars to form a new str
// - rtn the new str

function swapCase(str) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) return char.toUpperCase();
    else if (/[A-Z]/.test(char)) return char.toLowerCase();
    else return char;
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
