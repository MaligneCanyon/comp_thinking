function myForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    // fn(arr[i]); // works, but use the general case
    fn(arr[i], i, arr); // general case
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min); // 3
