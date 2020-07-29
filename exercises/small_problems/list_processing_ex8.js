// inputs:
// - arr (2d)
// outputs:
// - arr (1d)
// reqs:
// - take a 2d arr w/ each elem reping a fruit and quantity
// - rtn a 1d arr w/ each fruit listed the quantity num of times
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - for each subarr in the arr
//   - init a newArr to []
//   - push the subarr str to the newArr
//     (push the str the num of times specd by the numeric value in the subarr)
//   - map the newArr to the subarr
// - flatten and rtn the arr

function arrExpander(subarr) {
  let [str, num] = subarr;
  let newArr = [];

  while (num --> 0) newArr.push(str);
  return newArr;
}

function buyFruit(arr) {
  return arr.map(arrExpander).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// ["apple", "apple", "apple", "orange", "banana", "banana"]
