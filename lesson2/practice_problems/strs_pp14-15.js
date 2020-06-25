// pp14
// let boxNumber = 356.toString(); // raises SyntaxError
let boxNumber = 356..toString();
console.log(boxNumber);
boxNumber = (356).toString();
console.log(boxNumber);

// pp15
boxNumber = parseInt(boxNumber, 10);
console.log(typeof(boxNumber)); // 'number'
boxNumber = String(boxNumber);
console.log(typeof(boxNumber)); // 'string'
