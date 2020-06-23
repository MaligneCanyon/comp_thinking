// abs:
// - filter the xactions for the specified item
// - reduce the quantity of items to a total
// - rtn T if the total is > 0; F otherwise

function transactionsFor(inventoryItem, xactions) {
  return xactions.filter(obj => obj['id'] === inventoryItem);
}

function isItemAvailable(inventoryItem, xactions) {
  let arr = transactionsFor(inventoryItem, xactions);
  // console.log(arr);
  let total = arr.reduce((accum, obj) => {
    let sign = obj['movement'] === 'in' ? 1 : -1;
    // console.log(`accum = ${accum}, sign = ${sign}, quantity = ${obj['quantity']}`);
    return accum + sign * obj['quantity'];
  }, 0);

  // console.log(total);
  return total > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
