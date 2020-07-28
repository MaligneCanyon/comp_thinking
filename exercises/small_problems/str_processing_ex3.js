// inputs:
// - str
// outputs:
// - obj
// reqs:
// - take a str and rtn an obj containing a count of chars that are alpha lowercase, alpha uppercase,
//   non-alpha
// rules:
// - alpha lowercase if char in range [a-z]
// - alpha uppercase if char in range [A-Z]
// testcases:
// - as below
// struct:
// - arr
// algo:
// - init an obj to { lowercase: 0, uppercase: 0, neither: 0, }
// - split the str into an arr of chars
// - for each char
//   - if the char is lowercase
//     - incr the value of the 'lowercase' property
//   - else if the char is uppercase
//     - incr the value of the 'uppercase' property
//   - else
//     - incr the value of the 'neither' property
// - rtn the obj

// function letterCaseCount(str) {
//   let obj = { lowercase: 0, uppercase: 0, neither: 0, };

//   str.split('').forEach(char => {
//     if (/[a-z]/.test(char)) obj.lowercase++;
//     else if (/[A-Z]/.test(char)) obj.uppercase++;
//     else obj.neither++;
//   });

//   return obj;
// }

function letterCaseCount(str) {
  let obj = {};

  obj.lowercase = (str.match(/[a-z]/g) || []).length;
  obj.uppercase = (str.match(/[A-Z]/g) || []).length;
  obj.neither = str.length - obj.lowercase - obj.uppercase;
  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
