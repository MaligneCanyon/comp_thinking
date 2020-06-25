let rlSync = require('readline-sync');

let name = rlSync.question("What is your name?\n");
if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else console.log(`Hello ${name}.`);

// What is your name? Bob
// Hello Bob.                                   // console output

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?             // console output
