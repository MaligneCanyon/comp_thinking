// inputs:
// - int (xaction id), arr (of objs)
// outputs:
// - boolean (wheof objs for a particular xaction)
// reqs:
// - take an arr w/ obj elems
// - filter out elems that don't match the input xaction id
// - sum the in and out movements of the item
// - rtn a boolean indicating whether the sum is +ve or -ve
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - call transactionsFor() to filter the xactions for the specified item
// - reduce the quantity of items to a total
// - rtn T if the total is > 0; F otherwise

function transactionsFor(item, xactions) {
  return xactions.filter(obj => obj.id === item);
}

function isItemAvailable(item, xactions) {
  let arr = transactionsFor(item, xactions);
  let total = arr.reduce((accum, obj) => accum + (obj.movement === 'in' ? obj.quantity : -obj.quantity), 0);
  return (total > 0);
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
