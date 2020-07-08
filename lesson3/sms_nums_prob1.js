// inputs:
// - str (input ph num digits plus special chars)
// outputs:
// - str (formated ph num or string of 10 0s)
// reqs:
// - clean up a str of digits and possible other chars reping a ph num
// - rtn the formatted str
// rules:
//     If the phone number is less than 10 digits, assume that it is a bad number.
//     If the phone number is 10 digits, assume that it is good.
//     If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
//     If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//     If the phone number is more than 11 digits, assume that it is a bad number.
// - for bad numbers, just a return a string of 10 0s.
// test cases:
  console.log(smsStr("123456789"));     // "0000000000"
  console.log(smsStr("1234567890"));    // "1234567890"
  console.log(smsStr("12345678901"));   // "2345678901"
  console.log(smsStr("92345678901"));   // "0000000000"
  console.log(smsStr("123456789012"));  // "0000000000"
  console.log(smsStr("123456789-12"));  // "2345678912"
  console.log(smsStr("(123)456-7890")); // "1234567890"
// struct:
// - str
// algo:
// - remove non-digit chars from the str
// - if the length of the resulting str is < 10, rtn a str of 10 0s
// - if the length of the resulting str is 10, rtn the str
// - if the length of the resulting str is 11
//   - if the 1st char is a '1', rtn the last 10 chars of the str
//   - else rtn a str of 10 0s
// - if the length of the resulting str > 11, rtn a str of 10 0s

// function smsStr(str) {
//   str = str.replace(/[^0-9]/g, '');
//   strLength = str.length;
//   if (strLength < 10) return '0000000000';
//   if (strLength === 10) return str;
//   if (strLength === 11) {
//     if (str[0] === '1') return str.slice(1);
//     else return '0000000000';
//   }

//   return '0000000000';
// }

function smsStr(str) {
  str = str.replace(/[^0-9]/g, '');
  if (str.length === 10) return str;
  if (str.length === 11 && str[0] === '1') return str.slice(1);
  return '0'.repeat(10);
}
