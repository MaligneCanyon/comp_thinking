// While version numbers often appear to be decimal numbers, they are, in fact, a convenient notation
// for a more complicated number system. The following are all legal version numbers:

// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Here is an example of version number ordering:
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// inputs:
// - 2 strs (reping 2 version nums)
// outputs:
// - num (-1, 0, or 1)
// reqs:
// - parse the two vers nums and determine whether the 1st is greater, equal to, or less than the 2nd
// - rtn -1, 0, 1 based on the above comparison
// - rtn null if the inputs contain chars other than digits or '.'
// rules:
// - digits at the beginning of the str are more signif than those appearing later in the str
// - digits later in the str indicate a more specific vers
// - comparing digits at the same pos in the two strs,
//   - if both the str1digit and str2digit do not exist, rtn 0
//   - if str1digit does not exist
//     - if the remaining str2digits equal 0, rtn 0
//     - else rtn -1
//   - if str2digit does not exist
//     - if the remaining str1digits equal 0, rtn 0
//     - else rtn 1
//   - if the str1digit < str2digit, rtn -1
//   - if the str1digit > str2digit, rtn 1
//   - if the str1digit = str2digit, move to the next ndx pos
// struct:
// - arr (to hold digits of the two strs)
// algo:
// - rtn null if inputs are invalid
// - split each str into an arr of digits (split at '.')
// - calc the max length of the 2 arrs
// - for each digit in the arrs
//   - compare the digits using the above rules
// - if the end of the loop has been reached, and no value returned thusfar, rtn 0
// - rtn the comparison result

function validInput(str) {
  // regex composition:
  // >=0 groups of 1+ digits followed by a dot, always
  // ending w/ a group of 1+ digits, and containing no other chars
  // return (str !== '' && str !== undefined) && (/^([0-9]+\.)*[0-9]+$/.test(str));

  // '\2' refs the inner capture group in the following (but the result is incorrect - why?):
  // whatever substr matched the 1st time must match exactly the 2nd time;
  // '123.123' will match, but '123.456' won't
  return (str !== '' && str !== undefined) && (/^(([0-9]+)\.)*\2$/.test(str));
}

function remainingDigitsValue(arr) {
  // console.log('remainingDigitsValue = ', Number(arr.join('')));
  return Number(arr.join(''));
}

function compareVersions(vers1, vers2) {
  if (!validInput(vers1) || !validInput(vers2)) return null;

  let arr1 = vers1.split('.');
  let arr2 = vers2.split('.');
  let maxLength = Math.max(arr1.length, arr2.length);

  for (let ndx = 0; ndx < maxLength; ndx++) {
    if (arr1[ndx] === undefined && arr2[ndx] === undefined) return 0;
    if (arr1[ndx] === undefined) {
      if (remainingDigitsValue(arr2.slice(ndx)) === 0) return 0;
      return -1;
    }

    if (arr2[ndx] === undefined) {
      if (remainingDigitsValue(arr1.slice(ndx)) === 0) return 0;
      return 1;
    }

    // could use 'map' here to convert the arr elems to nums
    if (Number(arr1[ndx]) < Number(arr2[ndx])) return -1;
    if (Number(arr1[ndx]) > Number(arr2[ndx])) return 1;
    // else continue;
  }

  return 0; // arrs are equiv
}

console.log(compareVersions());                     // null // no args
console.log(compareVersions('0.1'));                // null // only 1 arg
console.log(compareVersions('0.1e', '1'));          // null // invalid char
console.log(compareVersions('0..1', '1'));          // null // invalid char
console.log(compareVersions('0.1', '0.1'));         // 0
console.log(compareVersions('1', '1'));             // 0
console.log(compareVersions('1', '0.1'));           // 1
console.log(compareVersions('1.0', '1'));           // 0
console.log(compareVersions('1', '1.0.0.1'));       // -1
console.log(compareVersions('1.0.0.1', '1'));       // 1

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
console.log(compareVersions('0.1', '1'));           // -1
console.log(compareVersions('1', '1.0'));           // 0
console.log(compareVersions('1.0', '1.1'));         // -1
console.log(compareVersions('1.1', '1.2'));         // -1
console.log(compareVersions('1.2', '1.2.0.0'));     // 0
console.log(compareVersions('1.2.0.0', '1.18.2'));  // -1
console.log(compareVersions('1.18.2', '13.37'));    // -1

// from the "Create Examples / Test Cases" topic
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
