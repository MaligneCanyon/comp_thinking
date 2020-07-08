// encode
// ======
// inputs:
// - str (to encode)
// - int (num of rails)
// outputs:
// - str (encoded)
// reqs:
// - encode a str
// rules:
// - none
// struct:
// - arr (w/ str elems for each rail)
// algo:
// - create an arr w/ 'rails' empty strs
// - set a flag to indicate whether we are moving down or up between rails
// - init an ndx to 0
// - for each char in the decoded str
//   - copy the char to the str elem at the current ndx
//   - if the num of rails is > 1
//     - if we are moving down
//       - incr the ndx
//     - else
//       - decr the ndx
//     - if the ndx is now pointing to the last or the first rail
//       - flip the value of the flag (so that we can move in the other dir)
// - join the encoded str elems to form a newstr
// - rtn the (encoded) newstr

let arr; // global

function encode(str, rails) {
  arr = [];
  for (let i = 0; i < rails; i++) arr.push('');
  return stringy(str, rails, true);
}

// decode
// ======
// algo:
// - since encode populates the global arr, and since the encoded and decoded strs
//   are the same length, we can call encode to determine how many chars come
//   from each rail (from each arr elem)
// - make a copy of the encoded str
// - for each elem in the arr
//   - set the elem equal to the first elem.length chars sliced from the copy of
//     the encoded str
// - init a newStr to ''
// - set a flag to indicate whether we are moving down or up between rails
// - init an ndx to 0
// - for each char in the encoded str
//   - slice the first char of the arr elem at the current ndx
//   - append the char to the newStr
//   - if the num of rails is > 1
//     - if we are moving down
//       - incr the ndx
//     - else
//       - decr the ndx
//     - if the ndx is now pointing to the last or the first rail
//       - flip the value of the flag (so that we can move in the other dir)
// - rtn the (decoded) newStr

function decode(str, rails) {
  let strCopy = str.slice();

  encode(str, rails);
  arr = arr.map(elem => {
    let newElem = strCopy.slice(0, elem.length);
    strCopy = strCopy.slice(elem.length);
    return newElem;
  });

  return stringy(str, rails, false);
}

function stringy(str, rails, cipher) {
  let newStr = '';
  let movingDown = true;
  let ndx = 0;

  str.split('').forEach(char => {
    if (cipher) arr[ndx] += char;
    else {
      newStr += arr[ndx][0];
      arr[ndx] = arr[ndx].slice(1);
    }
    // console.log(`arr = ${arr}`);

    if (rails > 1) {
      if (movingDown) ndx += 1;
      else ndx -= 1;
      if (ndx === rails - 1 || ndx === 0)
        movingDown = movingDown ? false : true;
    }
  });

  return cipher ? arr.join('') : newStr;
}

console.log(encode('', 4));                          // ''
console.log(encode('One rail, only one rail', 1));   // 'One rail, only one rail'
console.log(encode('XOXOXOXOXOXOXOXOXO', 2));        // 'XXXXXXXXXOOOOOOOOO'
console.log(encode('WEAREDISCOVEREDFLEEATONCE', 3)); // 'WECRLTEERDSOEEFEAOCAIVDEN'
console.log(encode('EXERCISES', 4));                 // 'ESXIEECSR'
console.log(encode('More rails than letters', 24));  // 'More rails than letters'
console.log(decode('', 4));                          // ''
console.log(decode('ABCDEFGHIJKLMNOP', 1));          // 'ABCDEFGHIJKLMNOP'
console.log(decode('XXXXXXXXXOOOOOOOOO', 2));        // 'XOXOXOXOXOXOXOXOXO'
console.log(decode('TEITELHDVLSNHDTISEIIEA', 3));    // 'THEDEVILISINTHEDETAILS'
console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // 'WEAREDISCOVEREDFLEEATONCE'
