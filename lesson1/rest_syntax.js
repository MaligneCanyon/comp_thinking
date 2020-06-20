// function maxItem() { // use w/ convoluted or better syntax
  // let maximum = arguments[0]; // use w/ convoluted or better syntax
function maxItem(firstElem, ...moreElems) { // use w/ best syntax ('rest' syntax is the best !)
  let maximum = firstElem; // use w/ best syntax

  // [].forEach.call(arguments, value => { // convoluted
  // Array.from(arguments).forEach(value => { // better
  moreElems.forEach(value => { // best
    if (value > maximum) {
      maximum = value;
    }
  });

  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3)); // 10
