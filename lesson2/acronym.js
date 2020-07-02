// abstractions:
// - remove all punctuation except hyphens
// - split the str into an arr (split at hyphens or spaces)
// - map the capitalized first letter of each arr elem back to the arr
// - join the arr elems and rtn the string

// function acronym(string) {
//   return string.replace(/[,:.]/g, '').split(/[ -]/).map(elem => elem[0].toUpperCase()).join('');
// }

function acronym(string) {
  return string.split(/[ -]/).map(elem => elem[0].toUpperCase()).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
