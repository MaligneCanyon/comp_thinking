// inputs:
// - str
// outputs:
// - str
// reqs:
// - chg the case of even-indexed chars in a str to lowercase
// - chg the case of odd-indexed chars in a str to uppercase
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
//   - if the arr ndx is even and the char is lowercase alpha, convert it to uppercase
//   - if the arr ndx is odd and the char is uppercase alpha, convert it to lowercase
// - join the arr chars to form a new str
// - rtn the new str

// function staggeredCase(str) {
//   return str.split('').map((char, ndx) => {
//     if (ndx % 2 === 0 && /[a-z]/.test(char)) return char.toUpperCase();
//     else if (ndx % 2 === 1 && /[A-Z]/.test(char)) return char.toLowerCase();
//     else return char;
//   }).join('');
// }

function staggeredCase(str) {
  return str.split('').map((char, ndx) => ndx % 2 ? char.toLowerCase() : char.toUpperCase()).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
