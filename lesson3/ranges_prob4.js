// ranges
// ======
// inputs:
// - str
// output:
// - arr (of nums)
// reqs:
// - rtn a list of nums gleaned from a criptic str
// rules:
// - if a numerical value of a digit from the str is < that of the prev digit, repeatedly increment
//   the current numerical value until thats no longer the case
// test cases:
    console.log(ranges("1, 3, 7, 2, 4, 1"));  // --> 1, 3, 7, 12, 14, 21
    console.log(ranges("1-3, 1-2"));          // --> 1, 2, 3, 11, 12
    console.log(ranges("1-3, 1-4"));          // --> 1, 2, 3, 11, 12, 13, 14
    console.log(ranges("1:5:2"));             // --> 1, 2, 3, 4, 5, 6, ... 12
    console.log(ranges("104-2"));             // --> 104, 105, ... 112
    console.log(ranges("104-02"));            // --> 104, 105, ... 202
    console.log(ranges("184-02"));            // --> 184, 185, ... 202
    console.log(ranges("114-12"));            // --> 114, 115, ... 212
    console.log(ranges("14-12"));             // --> 14, 15, ... 112
    console.log(ranges("545, 64:11"));        // --> 545, 564, 565, .. 611
// struct:
// - arr (to hold ranges and individual digits)
// algo:
// - split the str into an arr of ranges and individual digits #1
// - if an arr elem contains a range separator, then its a range ...
//   - determine the numerical values in the range ...
//     - split the range into an subArr of digits #2
//     - condition the digits so that they are an ascending seq #AR2
//     - expand the subArr of digits to a subArr of congruent digits #ER3
//   - map back the subArr of congruent digits
// - else its an individual digit ...
//   - map back the digit
// - flatten the resulting arr #3
// - condition the arr of digits so that they are an ascending seq #AR2
// - map the arr of digits to an arr of nums #4
// - rtn arr of nums

function ranges(str) {
  let arr = str.split(', ');
  // console.log('1: ', arr);

  let rangeSeps = /:|\-|\.\./;
  arr = arr.map((elem, ndx) => {
    // console.log(elem, rangeSeps, elem.split(rangeSeps));
    if (rangeSeps.test(elem)) {
      let subArr = elem.split(rangeSeps);
      // console.log('2: ', subArr);
      subArr = adjustRange(arr[ndx - 1], subArr);
      return expandRange(subArr);
    } else return elem;
  }).flat();
  // console.log('3: ', arr);

  arr = arr.map(digitAdjuster).map(Number);
  // console.log('4: ', arr);

  return arr;
}

function adjustRange(prevDigit, rangeArr) {
  for (let ndx = 0; ndx < rangeArr.length; ndx++) {
    if (ndx === 0 && prevDigit !== undefined) {
      // console.log('AR0: ', rangeArr[0], 1, [prevDigit, rangeArr[0]]);
      rangeArr[0] = digitAdjuster(rangeArr[0], 1, [prevDigit, rangeArr[0]]);
    } else if (ndx > 0) rangeArr[ndx] = digitAdjuster(rangeArr[ndx], ndx, rangeArr);
    // console.log('AR1: ', ndx, rangeArr[ndx]);
  }

  // console.log('AR2: ', rangeArr);
  return rangeArr;
}

function expandRange(arr) {
  let newArr = [];
  // console.log('ER1: ', arr);

  // arr = digitAdjuster(arr.map(Number));
  arr = arr.map(digitAdjuster).map(Number);
  // console.log('ER2: ', arr);
  for (let num = arr[0]; num <= arr[arr.length - 1]; num++) {
    newArr.push(num);
  }

  // console.log('ER3: ', newArr.map(String));
  return newArr.map(String);
}

// digitAdjuster
// =============
// - convert the current digit and prev digit to nums
// - init a prepender to 0
// - while the current num is < the prev num
//   - incr the prepender
//   - convert the current num back to a digit
//   - prepend the prepender to the digit
//   - convert the digit back to a num

function digitAdjuster(digit, ndx, arr) {
  [prevDigit, currentDigit] = [arr[ndx - 1], arr[ndx]];
  if (prevDigit !== undefined) {
    [prevNum, currentNum] = [Number(arr[ndx - 1]), Number(arr[ndx])];
    let prepender = 0;
    while (currentNum < prevNum) {
      prepender++;
      currentDigit = String(prepender) + digit;
      currentNum = Number(currentDigit);
      // console.log(currentNum, prevNum, prepender);
    }

    arr[ndx] = currentDigit;
  }

  // console.log('dA:', arr[ndx]);
  return arr[ndx];
}
