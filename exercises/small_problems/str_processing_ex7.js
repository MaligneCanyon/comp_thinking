// function staggeredCase(str) {
//   let arr = str.split('');

//   for (let ndx = 0, counter = 0; ndx < str.length; ndx++) {
//     if (/[a-z]/i.test(arr[ndx])) {
//       arr[ndx] = (counter % 2) ? arr[ndx].toLowerCase() : arr[ndx].toUpperCase();
//       counter++;
//     }
//   }

//   return arr.join('');
// }

function staggeredCase(str) {
  let counter = 0; // scoped outside the map cb

  return str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      // incr the counter after eval'ing (counter % 2)
      return (counter++ % 2) ? char.toLowerCase() : char.toUpperCase();
    } else return char;
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
