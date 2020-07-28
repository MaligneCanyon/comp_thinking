// inputs:
// - str
// outputs:
// - str
// reqs:
// - take a str and rtn a str w/ the 1st char in each word alpha uppercase and all other chars
//   alpha lowercase
// rules:
// - alpha lowercase if char in range [a-z]
// - alpha uppercase if char in range [A-Z]
// - words are seqs of non-whitespace chars
// testcases:
// - as below
// struct:
// - arr
// algo:
// - split the str into an arr of words
// - for each word
//   - convert the 1st char to uppercase
//   - convert the remaining chars to lowercase
// - join the words in the new arr of words to form a new str
// - rtn the new str

function wordCap(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
