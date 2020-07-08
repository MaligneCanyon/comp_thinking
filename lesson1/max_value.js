// determine the max value from an arr by using 'reduce'
let arr = [6, 14, 4, 9, 17, -2, 45, 8, 12];
let maxValue = arr.reduce((accum, elem) => elem > accum ? elem : accum, -Infinity);
console.log(maxValue); // 17
