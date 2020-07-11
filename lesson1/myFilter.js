function myFilter(arr, fn) {
  let newArr = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (fn(arr[i], i, arr)) newArr.push(arr[i]);
  // }

  arr.forEach(elem => {
    if (fn(elem)) newArr.push(elem);
  });

  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
                      { a: 5, b: 12, c: 13 },
                      { a: 1, b: 2,  c: 3 },], isPythagoreanTriple)
);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]


function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
