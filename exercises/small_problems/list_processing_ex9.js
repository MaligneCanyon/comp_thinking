// inputs:
// - int (xaction id), arr (of objs)
// outputs:
// - arr (of objs for a particular xaction)
// reqs:
// - take an arr w/ obj elems
// - filter out elems that don't match the input xaction id
// - rtn the arr w/ the remaining elems
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - for each obj in the arr
//   - filter out those objs that don't contain the input xaction id
// - rtn the filtered arr

function transactionsFor(item, xactions) {
  // return xactions.filter(obj => obj.id === item);
  return xactions.filter(({id}) => id === item); // from the Solution
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

console.log(transactionsFor(101, transactions));
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
