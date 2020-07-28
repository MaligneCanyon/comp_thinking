// inputs:
// - str
// outputs:
// - str
// reqs:
// - alternate the case of alpha chars in a str
// - rtn the revised str
// rules:
// - alpha lowercase if char in range [a-z]
// - alpha uppercase if char in range [A-Z]
// - 1st alpha char is upppercase
// testcases:
// - as below
// struct:
// - arr
// algo:
// - init a flag to true
// - split the str into an arr of chars
// - map the chars as follows:
//   - if the char is alpha
//     - if the flag is true, convert the char to uppercase
//     - if the flag is false, convert the char to lowercase
//     - toggle the flag
//   - rtn the char
// - join the arr chars to form a new str
// - rtn the new str

// function staggeredCase(str) {
//   let upCase = true;

//   return str.split('').map(char => {
//     if (/[a-z]/i.test(char)) {
//       char = upCase ? char.toUpperCase() : char.toLowerCase();
//       upCase = !upCase;
//     }

//     return char;
//   }).join('');
// }

function staggeredCase(str) {
  let counter = 0; // scoped outside the map cb

  return str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      // incr the counter after eval'ing (counter % 2)
      char = counter++ % 2 ? char.toLowerCase() : char.toUpperCase();
    }

    return char;
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
