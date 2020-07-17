// inputs:
// - str
// outputs:
// - boolean
// reqs:
// - determine if a str can be created from 2-letter blocks of chars of the alphabet
// rules:
// - each block (therefore each char (or its partner)) can only be used once
// test cases:
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
// struct:
// - arr (to hold chars from the str)
// - obj (to rep blocks)
// algo:
// - init an obj to key:value pairs reping the letters on a block
// - init a flag to F
// - split the str into an arr of chars
// - for each char
//   - for each key in the obj
//     - if the obj contains a property key or value equal to the char
//       - set the flag to T
//       - delete the property from the obj
//       - break
//   - if the flag is F, the block w/ the letter was already used, so rtn F
// - eos reached and every char foundLetter, so rtn T

function isBlockWord(str) {
  let arr = str.toUpperCase().split('');
  let blocks = {
    'B': 'O',
    'X': 'K',
    'D': 'Q',
    'C': 'P',
    'N': 'A',
    'G': 'T',
    'R': 'E',
    'F': 'S',
    'J': 'W',
    'H': 'U',
    'V': 'I',
    'L': 'Y',
    'Z': 'M',
  }

  let keys = Object.keys(blocks);
  let values = Object.values(blocks);
  for (let i = 0; i < arr.length; i++) {
    let foundLetter = false;
    for (key in blocks) {
      if (key === arr[i] || blocks[key] === arr[i]) {
        foundLetter = true;
        delete(blocks[key]);
        break;
      }
    }
    if (!foundLetter) return false;

  // this works too, but is a bit awkward ...
  // for (let i = 0; i < arr.length; i++) {
  //   let keys = Object.keys(blocks);
  //   let values = Object.values(blocks);
  //   if (keys.includes(arr[i])) delete(blocks[arr[i]]);
  //   else if (values.includes(arr[i])) delete(blocks[keys[values.indexOf(arr[i])]]);
  //   else return false;

  }

  return true;
}
