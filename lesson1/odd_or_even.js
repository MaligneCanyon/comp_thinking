function iterate(arr, cb) {
  for (let i = 0; i < arr.length; i++) cb(arr[i]);
}

function logOddEven(num) {
  console.log(num % 2 ? 'odd' : 'even');
}

function oddOrEven(arr) {
  // iterate(arr, logOddEven);
  arr.forEach(logOddEven); // can replace 'iterate' w/ the forEach method
}

oddOrEven([1, 2, 3, 4, 5]);
