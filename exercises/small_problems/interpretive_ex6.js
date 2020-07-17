// inputs:
// - int (n = star width)
// outputs:
// - n logged strs
// reqs:
// - create an 8-pt star in an nxn grid by printing a pattern of spaces and asterisks
// rules:
// - n lines
// - 1st line        : (i - 1) spaces, asterisk, (n-3)/2 - (i - 1) spaces, asterisk,
//                     (n-3)/2 - (i - 1) spaces, asterisk
// - ...
// - line mid=n/2+0.5: 0 spaces, n asterisks
// - ...
// - nth line        : (n - i) spaces, asterisk, (n-3)/2 - (n - i) spaces, asterisk,
//                     (n-3)/2 - (n - i) spaces, asterisk
// test cases:
// - as below
// struct:
// - str
// algo:
// - calc the midpt value
//   - ceil(n/2)
// - for each ith of n lines
//   - if i < midpt
//     - construct a substr as follows
//       - (i - 1) spaces
//       - asterisk
//       - (n - 3)/2 - (i - 1) spaces
//     - add the substr to the str
//     - add an asterisk to the str
//     - add the reverse of the substr to the str
//   - else if i > midpt
//     - construct a substr as follows
//       - (n - i) spaces
//       - asterisk
//       - (n - 3)/2 - (n - i) spaces
//     - add the substr to the str
//     - add an asterisk to the str
//     - add the reverse of the substr to the str
//   - else
//     - set the str to n asterisks
// - output the str

// function star(n) {
//   let midpt = Math.ceil(n/2);
//   let str;
//   let substr;

//   for (let i = 1; i <= n; i++) {
//     if (i < midpt) {
//       substr = ' '.repeat(i - 1) + '*';
//       substr += ' '.repeat((n - 3)/2 - (i - 1));
//       str = substr + '*' + substr.split('').reverse().join('');
//     } else if (i > midpt) {
//       substr = ' '.repeat(n - i) + '*';
//       substr += ' '.repeat((n - 3)/2 - (n - i));
//       str = substr + '*' + substr.split('').reverse().join('');
//     } else str = '*'.repeat(n);

//     console.log(str);
//   }
// }

// refactor #1
function star(n) {
  let midpt = Math.ceil(n/2);
  let str;
  let substr;
  let iTerm;

  for (let i = 1; i <= n; i++) {
    if (i === midpt) str = '*'.repeat(n);
    else {
      iTerm = i > midpt ? n - i : i - 1;
      substr = ' '.repeat(iTerm) + '*' + ' '.repeat((n - 3)/2 - iTerm);
      str = substr + '*' + substr.split('').reverse().join('');
    }

    console.log(str);
  }
}

// refactor #2
// function star(n) {
//   let midpt = Math.ceil(n/2);
//   let str;
//   let substr;
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (i < midpt) {
//       substr = ' '.repeat(i - 1) + '*' + ' '.repeat((n - 3)/2 - (i - 1));
//       str = substr + '*' + substr.split('').reverse().join('');
//       arr.push(str);
//     } else if (i > midpt) str = arr[n - i];
//     else str = '*'.repeat(n);

//     console.log(str);
//   }
// }

star(1); // protostar
star(3);
star(5);

star(7); // main sequence
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(23); // red giant
