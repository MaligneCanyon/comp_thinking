// function maxItem() {
//   let maximum = arguments[0];

//   // [].forEach.call(arguments, value => { // convoluted
//   Array.from(arguments).forEach(value => { // better
//     if (value > maximum) {
//       maximum = value;
//     }
//   });

//   return maximum;
// }


function maxItem(firstElem, ...moreElems) { // best syntax ('rest' is the best syntax !)
  let maximum = firstElem;

  moreElems.forEach(value => { // best
    if (value > maximum) {
      maximum = value;
    }
  });

  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3)); // 10
