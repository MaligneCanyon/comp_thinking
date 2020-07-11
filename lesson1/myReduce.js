function myReduce(arr, fn, initial) {
  let i;
  let result;

  if (initial === undefined) {
    i = 1;
    result = arr[0];
  } else {
    i = 0;
    result = initial;
  }

  // for (; i < arr.length; i++) {
  //   result = fn(result, arr[i]);
  // }
  arr.slice(i).forEach(elem => result = fn(result, elem));

  return result;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;
console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49


function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));   // "targets"
