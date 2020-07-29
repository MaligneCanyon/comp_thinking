// inputs:
// - int
// outputs:
// - int
// reqs:
// - rtn the sum of the digits of the input num
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - convert the num to a str
// - split the str into an arr of chars
// - map the arr of chars to an arr of nums
// - reduce the arr of nums to a total
// - rtn the total

function sum(num) {
  return String(num).split('').map(Number).reduce((accum, elem) => accum + elem);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
