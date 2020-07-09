// inputs:
// - str (text to be encoded), int (key)
// outputs:
// - str (encoded text)
// reqs:
// - given a str, shift alpha chars by the specd num of chars
// rules:
// - only alpha chars affected
// - if end of alphabet reached, wrap to beginning of alphabet
//   - (old char pos in alphabet + key) % 26 = new char pos in alphabet
// test cases:
// - as below, plus

// struct:
// - str
// algo:
// - init an alphabet const to 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// - init a new str to ''
// - for each char in the str
//   - if the char is alphabetic
//     - determine the value of the key from the keyword
//     - encrypt the char using the key
//   - add the char to the new str
// - rtn the new str

function vigenereEncrypt(str, keyword) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newStr = '';
  let keyNdx;
  let keyChar;
  let key;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (/[a-z]/i.test(char)) {
      if (keyNdx === undefined) keyNdx = 0;
      else {
        keyNdx++;
        keyNdx %= keyword.length;
      }

      keyChar = keyword[keyNdx];
      key = alphabet.indexOf(keyChar.toUpperCase());
      char = encryptChar(char, key);
    }

    newStr += char;
  }

  return newStr;
}

// encryptChar()
// algo:
// - determine whether the char is lowercase alphabetic
// - convert the char to uppercase
// - find the ndx pos of the char in the uppercase alphabet
// - if the char is alphabetic (ndx pos is > -1)
//   - shift the ndx pos by the key amt
//   - convert the ndx pos to a char
//   - if the char was lowercase
//     - convert the char to lowercase
// - rtn the char

function encryptChar(char, key) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let upperCaseChar = char.toUpperCase();
  let isLowerCase = upperCaseChar !== char; // could use '/[a-z]/.test(char)'
  let charNdx = alphabet.indexOf(upperCaseChar);

  if (charNdx > -1) {
    charNdx = (charNdx + key) % 26;
    char = alphabet.charAt(charNdx);
    if (isLowerCase) char = char.toLowerCase();
  }

  return char;
}

let plaintext = "Pineapples don't go on pizzas!";
let keyword = "meat";
console.log(vigenereEncrypt(plaintext, keyword));
// result: Bmnxmtpeqw dhz'x gh ar pbldal!

keyword = "A";
console.log(vigenereEncrypt(plaintext, keyword));
// result: Pineapples don't go on pizzas!

keyword = "Aa";
console.log(vigenereEncrypt(plaintext, keyword));
// result: Pineapples don't go on pizzas!

keyword = "cab";
console.log(vigenereEncrypt(plaintext, keyword));
// result: Riogaqrlfu dpp't hq oo riabat!

plaintext = "Dog"
keyword = "Rabbit"
console.log(vigenereEncrypt(plaintext, keyword));
// result: Uoh
