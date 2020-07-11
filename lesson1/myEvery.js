function myOwnEvery(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString)); // true
console.log(myOwnEvery(['a', 'a234', 1234], isAString));   // false


function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
