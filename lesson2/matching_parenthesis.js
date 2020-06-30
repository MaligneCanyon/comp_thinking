// Write a function that takes a string as an argument and returns true if the string contains properly balanced
// parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs,
// with each pair starting with '('.

function isBalanced(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') total++;
    else if (str[i] === ')') total--;
    if (total < 0) return false;
  }

  return (total === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
