let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];


// abstractions:
// - map a new obj with
//   - the country set to Canada
//   - the name capitalized
//   - all dots removed from the name


function processBands(data) {
  return data.map(updateBandInfo);
}

function updateBandInfo(obj) {
  let newObj = {};

  newObj.name = capitalize(obj.name).replace(/\./g, '');
  newObj.country = 'Canada';
  newObj.active = obj.active;

  return newObj; // non-mutating
}

function capitalize(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(processBands(bands));
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

console.log(bands); // should be unmutated
