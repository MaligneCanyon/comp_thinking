"use strict"; // the quotes are required

function foo() {
  console.log(this);
}

foo(); // logs 'undefined' in strict mode (as opposed to the global object)
