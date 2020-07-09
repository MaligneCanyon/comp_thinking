// inputs:
// - int (n = grid size)
// outputs:
// - n logged strs
// reqs:
// - create an nxn grid by printing a pattern of spaces and asterisks
// rules:
// - n lines
// - 1st line        : n/2-0.5 spaces, 1 asterisk
// - ...
// - line mid-2      : 2 spaces, n-4 asterisks
// - line mid-1      : 1 space,  n-2 asterisks
// - line mid=n/2+0.5: 0 spaces, n asterisks
// - mirrored below the midline

// - in general, for the ith line,
//   where i <= n/2+0.5,
//     (i - n/2-0.5) spaces, (1 + 2*(i - 1)) asterisks
//   where i > n/2+0.5,
//     (i - n/2-0.5) spaces, (n - 2*(i - n/2-0.5) asterisks
// test cases:
// - as below
// struct:
// - str
// algo:
// - calc the midpt value
//   - ceil(n/2)
// - for each ith of n lines
//   - construct a str as follows
//     - if i > midpt
//       - (i - midpt) spaces
//       - (n - 2 * (i - midpt)) asterisks
//     - else
//       - (midpt - i) spaces
//       - (1 + 2 * (i - 1)) asterisks
//   - output the str

function diamond(n) {
  let midpt = Math.ceil(n/2);
  // console.log(midpt);
  let str;

  for (let i = 1; i <= n; i++) {
    if (i > midpt) {
      str = ' '.repeat(i - midpt);
      str += '*'.repeat(n - 2 * (i - midpt));
    } else {
      str = ' '.repeat(midpt - i);
      // str += '*'.repeat(1 + 2 * (i - 1));
      str += '*'.repeat(2 * i - 1);
    }

    console.log(str);
  }
}

console.log(diamond(1));
// *

console.log(diamond(3));
//  *
// ***
//  *

console.log(diamond(9));
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
