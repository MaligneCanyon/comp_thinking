// ranges
// ======
// inputs:
// - str
// output:
// - arr (of nums)
// reqs:
// - rtn a list of nums gleaned from a cryptic str
// rules:
// - if a numerical value of a digit from the str is < that of the prev digit, repeatedly increment
//   the current numerical value until thats no longer the case
// test cases:
    console.log(ranges("1, 3, 7, 2, 4, 1"));  // --> 1, 3, 7, 12, 14, 21
    console.log(ranges("1-3, 1-2"));          // --> 1, 2, 3, 11, 12
    console.log(ranges("1:5:2"));             // --> 1, 2, 3, 4, 5, 6, ... 12
    console.log(ranges("104-2"));             // --> 104, 105, ... 112
    console.log(ranges("104-02"));            // --> 104, 105, ... 202
    console.log(ranges("545, 64:11"));        // --> 545, 564, 565, .. 611

    console.log(ranges("1-3, 1-4"));          // --> 1, 2, 3, 11, 12, 13, 14
    console.log(ranges("184-02"));            // --> 184, 185, ... 202
    console.log(ranges("114-12"));            // --> 114, 115, ... 212
    console.log(ranges("14-12"));             // --> 14, 15, ... 112
// struct:
// - arr (to hold ranges and individual digits)
// algo:
// - split the str into an arr of ranges and individual digits #1
// - if an arr elem contains a range separator, then its a range ...
//   - split the range into an subArr of digits #2
//   - map back the subArr of digits
// - else its an individual digit ...
//   - map back the digit
// - condition the arr and subArr digits so that they form an ascending seq #AR2, #3
// - expand the subArrs of digits to subArrs of congruent digits #ER3
// - map back the subArrs of congruent digits
// - flatten the resulting arr #4
// - condition the arr of digits so that they are an ascending seq
// - map the arr of digits to an arr of nums #5
// - rtn the arr of nums

function ranges(str) {
  let arr = str.split(', ');
  // console.log('1: ', arr);

  const rangeSeps = /:|\-|\.\./;
  arr = arr.map(elem => rangeSeps.test(elem) ? elem.split(rangeSeps) : elem);
  // console.log('2: ', arr);

  arr = arr.map((elem, ndx) => {
    return Array.isArray(elem) ? adjustRange(arr[ndx - 1], elem) : elem;
  });
  // console.log('3: ', arr);

  arr = arr.map((elem, ndx) => {
    return Array.isArray(elem) ? expandRange(elem) : elem;
  }).flat();
  // console.log('4: ', arr);

  arr = arr.map(adjustDigit).map(Number);
  // console.log('5: ', arr);

  return arr;
}

function adjustRange(prevElem, rangeArr) {
  rangeArr = rangeArr.map((elem, ndx) => {
    if (ndx === 0 && prevElem !== undefined) {
      let prevDigit = Array.isArray(prevElem) ? prevElem[prevElem.length - 1] : prevElem;
      // console.log('AR0: ', 1, [prevDigit, rangeArr[0]]);
      rangeArr[0] = adjustDigit(elem, 1, [prevDigit, rangeArr[0]]);
    } else if (ndx > 0) {
      // console.log('AR1: ', ndx, rangeArr[ndx]);
      rangeArr[ndx] = adjustDigit(elem, ndx, rangeArr);
    }
    return rangeArr[ndx];
  });

  // console.log('AR2: ', rangeArr);
  return rangeArr;
}

function expandRange(arr) {
  let newArr = [];
  // console.log('ER1: ', arr);

  // arr = adjustDigit(arr.map(Number));
  // arr = arr.map(adjustDigit).map(Number);
  arr = arr.map(Number);
  // console.log('ER2: ', arr);
  for (let num = arr[0]; num <= arr[arr.length - 1]; num++) {
    newArr.push(num);
  }

  // console.log('ER3: ', newArr.map(String));
  return newArr.map(String);
}

// adjustDigit
// =============
// - convert the current digit and prev digit to nums
// - init a prepender to 0
// - while the current num is < the prev num
//   - incr the prepender
//   - convert the current num back to a digit
//   - prepend the prepender to the digit
//   - convert the digit back to a num

function adjustDigit(elem, ndx, arr) {
  [prevDigit, currentDigit] = [arr[ndx - 1], arr[ndx]];
  // console.log('AD1: ', [prevDigit, currentDigit]);
  if (prevDigit !== undefined) {
    [prevNum, currentNum] = [Number(arr[ndx - 1]), Number(arr[ndx])];
    let prepender = 0;
    while (currentNum < prevNum) {
      prepender++;
      currentDigit = String(prepender) + arr[ndx]; //digit;
      // console.log('AD2: ', currentNum, prevNum, prepender, currentDigit);
      currentNum = Number(currentDigit);
    }

    arr[ndx] = currentDigit;
  }

  // console.log('AD3: ', arr[ndx]);
  return arr[ndx];
}
