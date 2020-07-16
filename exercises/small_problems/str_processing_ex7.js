// algo
// - init a flag 'upper' to true
// - split the str into an arr of chars
// - for each char
//   - if the char alphabetic
//     - if the flag is true
//       - map the uppercased char to the arr
//     - else
//       - map the lowercased char to the arr
//     - toggle the flag
// - join the arr chars and rtn the new str

// function staggeredCase(str) {
//   let upper = true;
//
//   return str.split('').map((char) => {
//     if (/[a-z]/i.test(char)) {
//       char = upper ? char.toUpperCase() : char.toLowerCase();
//       upper = !upper;
//     }
//
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
