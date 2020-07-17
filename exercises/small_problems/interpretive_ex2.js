// inputs:
// - int (n = grid size)
// outputs:
// - n logged strs
// reqs:
// - create an nxn grid by printing a pattern of spaces and asterisks
// rules:
// - n lines
// - 1st line       : (n/2+0.5 - 1) spaces, 1 asterisk
//   2nd line       : (n/2+0.5 - 2) spaces, 3 asterisks
//   3rd line       : (n/2+0.5 - 3) spaces, 5 asterisks
//   ...
//   midline-2      : 2 spaces, n-4 asterisks
//   midline-1      : 1 space,  n-2 asterisks
//   midline=n/2+0.5: 0 spaces, n asterisks
// - pattern is mirrored below the midline
// - in general, for the ith line,
//   where i <= n/2+0.5,
//     ((n/2+0.5) - i) spaces, (2*i - 1) asterisks
//   where i > n/2+0.5,
//     (i - (n/2+0.5)) spaces, (n - 2*(i - (n/2+0.5)) asterisks
// test cases:
// - as below
// struct:
// - str
// algo:
// - calc the midline value
//   - ceil(n/2)
// - for each ith of n lines
//   - construct a str as follows
//     - if i > midline
//       - (i - midline) spaces
//       - (n - 2 * (i - midline)) asterisks
//     - else
//       - (midline - i) spaces
//       - (2*i - 1) asterisks
//   - output the str

// function diamond(n) {
//   let midline = Math.ceil(n/2);
//   let str;

//   for (let i = 1; i <= n; i++) {
//     if (i > midline) {
//       str = ' '.repeat(i - midline);
//       str += '*'.repeat(n - 2*(i - midline));
//     } else {
//       str = ' '.repeat(midline - i);
//       str += '*'.repeat(2*i - 1);
//     }

//     console.log(str);
//   }
// }

function diamond(n) {
  let midline = Math.ceil(n/2);

  for (let i = 1, str; i <= n; i++) {
    str = i > midline ?
      ' '.repeat(i - midline) + '*'.repeat(n - 2*(i - midline)) :
      ' '.repeat(midline - i) + '*'.repeat(2*i - 1);
    console.log(str);
  }
}

diamond(1);
// *

diamond(3);
//  *
// ***
//  *

diamond(9);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
