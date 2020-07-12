// abs:
// - for each subarr elem in the arr
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
