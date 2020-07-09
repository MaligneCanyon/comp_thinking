function arrExpander(arr) {
  let [str, num] = arr;
  let newArr = [];

  for (let i = 0; i < num; i++) {
    newArr.push(str);
  }

  return newArr;
}

function buyFruit(arr) {
  return arr.map(arrExpander).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// ["apple", "apple", "apple", "orange", "banana", "banana"]
