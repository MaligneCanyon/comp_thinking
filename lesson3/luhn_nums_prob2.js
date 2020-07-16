// The Luhn formula is a simple checksum formula used to validate a variety of identification numbers,
// such as credit card numbers Canadian Social Insurance Numbers.
// The formula verifies a number against its included check digit, which is usually appended to a
// partial number to generate the full number. This number must pass the following test:

//     Counting from the rightmost digit and moving left, double the value of every second digit
//     For any digit that thus become 10 or more, subtract 9 from the result
//         1111 becomes 2121
//         8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
//     Add all these digits together
//         1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
//         8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulus 10 is congruent to 0),
// then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not
// valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).


// isLuhny()
// inputs:
// - str (representing an int)
// outputs:
// - boolean (whether or not the input is valid as per the Luhn formula)
// reqs:
// - given a str
//   - Counting from the rightmost digit and moving left, double the value of every second digit
//     For any digit that thus become 10 or more, subtract 9 from the result
//   - Add all these digits together
//   - rtn T or F based on whether the total ends with 0
// rules:
// - dble every 2nd elem value, starting with ndx 1
// - if the dbld value is > 10, subtract 9 from it
// struct:
// - arr (to hold numerical chars from the input str)
// algo:
// - strip out any non-numeric chars from the str
// - split the str into an arr of digits
// - reverse the arr
// - map the arr to nums according to the rules
// - reduce the arr to a total
// - return T or F based on whether the total is evenly divisible by 10

// function isLuhny(str) {
//   str = str.replace(/[^0-9]/g, '');
//   let arr = str.split('').reverse().map(Number).map((num, ndx) => {
//     if (ndx % 2) {
//       num *= 2;
//       return num > 9 ? num - 9 : num;
//     }
//     return num;
//   });

//   let total = arr.reduce((accum, elem) => accum + elem, 0);
//   // console.log(total);
//   return !(total % 10);
// }

function getLuhnTotal(str, dbleOddNdxValues = true) {
  str = str.replace(/[^0-9]/g, '');
  return str.split('').reverse().map(Number).map((num, ndx) => {
    if (ndx % 2 === Number(dbleOddNdxValues)) {
      num *= 2;
      return num > 9 ? num - 9 : num;
    }

    return num;
  }).reduce((accum, elem) => accum + elem, 0);
}

function isLuhny(str) {
  let total = getLuhnTotal(str);
  return !(total % 10);
}

console.log(isLuhny("1111")); // F
console.log(isLuhny("8763")); // T
console.log(isLuhny("2323 2005 7766 3554")); // T
console.log(isLuhny("2323--2005--7766--3554")); // T

// addCheckDigit()
// rules:
// - dble every 2nd elem value, starting from ndx 0
// - if the dbld value is > 10, subtract 9 from it
// - (total + chkDigit) % 10 === 0, so
// - chkDigit = 10 - total % 10
// algo:
// - as per isLuhny(), except
// - rtn the original str plus the digit which, when added to the total, makes the total evenly
//   divisible by 10

function addCheckDigit(str) {
  let total = getLuhnTotal(str, false);
  let chkDigit = 10 - total % 10;
  return str + String(chkDigit === 10 ? 0 : chkDigit);
}

console.log(addCheckDigit("2323 2005 7766 355")); // "2323 2005 7766 3554"
console.log(addCheckDigit("876")); // "8763"
console.log(addCheckDigit("111")); // "1115"
console.log(isLuhny("1115")); // T
console.log(addCheckDigit("2323 2005 7766 3554"));
  // "2323 2005 7766 3554 3"
  // is this what we want ? or rtn the original str since it's already a valid Luhn num ?
