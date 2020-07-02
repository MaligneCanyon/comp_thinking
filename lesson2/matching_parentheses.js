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
