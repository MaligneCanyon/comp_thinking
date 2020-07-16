function getTotalFromInvoice(invoice) {
  // let total = { total: 0 };
  // Object.keys(invoice).forEach(key => total.total += invoice[key]);
  // return total;

  return ({ total: Object.keys(invoice).reduce((accum, key) => accum + invoice[key], 0) });
}

console.log(getTotalFromInvoice({ ph:10000, inet:8000, tax:3000 })); // { total: 21000 }
