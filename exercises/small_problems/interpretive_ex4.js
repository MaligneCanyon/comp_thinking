// inputs:
// - str (text to be encoded), int (key)
// outputs:
// - str (encoded text)
// reqs:
// - given a str, replace each alphabetic char by the char occuring at the
//   specd 'key' num of positions later in the alphabet
// rules:
// - only alpha chars affected
// - if end of alphabet reached, wrap to beginning of alphabet
//   - (old char pos in alphabet + key) % 26 = new char pos in alphabet
// test cases:
// - as provided, plus
console.log(caesarEncrypt('*&^^(^^???|', 123));  // "*&^^(^^???|"
console.log(caesarEncrypt('Are you alive?', 6)); // "Gxk eua grobk?"
// struct:
// - arr
// algo:
// - split the str into an arr of chars
// - map each char in the arr
//   - if the char is alphabetic
//     - encrypt the char using the key
//     - map the encrypted char
//   - else
//     - map the existing char
// - join the chars to form a new str
// - rtn the new str

function caesarEncrypt(str, key) {
  return str.split('').map(char => encryptChar(char, key)).join('');
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

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
