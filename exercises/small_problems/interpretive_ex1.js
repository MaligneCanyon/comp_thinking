// inputs:
// - int (num of switches)
// outputs:
// - arr (switches that are on)
// reqs:
// - start w/ an arr of n booleans representing the switches; all elems are false (switches are off)
// - toggle every elem, then
//   toggle every 2nd elem, then
//   toggle every 3rd elem, then
//   ...
//   toggle the nth elem
// - rtn an arr of indicating which elems are true (switches are on)
// rules:
// - none
// test cases:
// - as below
// struct:
// - arr
// algo:
// - init an arr with n booleans, each with value false
// - for each pass (out of n passes)
//   - set an ndx to the current pass value minus 1
//   - for each ndxth arr elem
//     - toggle the elem
// - map the value of the ndx plus 1 (for the elems that are true) to the arr
// - filter the arr elems that have a truthy (numerical) value
// - rtn the arr

function lightsOn(switches) {
  let arr = [];
  let pass = switches;
  while (pass --> 0) arr.push(false);

  for (pass = 1; pass <= switches; pass++) {
    for (let ndx = pass - 1; ndx < switches; ndx += pass) {
      arr[ndx] = !arr[ndx];
    }
  }

  return arr.map((elem, ndx) => elem ? ndx + 1 : elem).filter(elem => elem);
}

// function lightsOn(switches) {
//   let max = Math.sqrt(switches);
//   let arr = [];

//   for (let i = 1; i <= max; i++) arr.push(i * i);
//   return arr;
// }

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(143));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
console.log(lightsOn(144));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]

// for (let j = 1; j < 50; j++) console.log(lightsOn(j));
