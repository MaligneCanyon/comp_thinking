// inputs:
// - str
// outputs:
// - arr (of strs)
// reqs:
// - take an input str
// - rtn an arr composed of strs representing each word is the str and the word's length
// rules:
// - words are sepd by a single space
// testcases:
// - as below
// struct:
// - arr
// algo:
// - if the str is empty or not present
//   - rtn an empty arr
// - split the str into an arr of words
// - map the words to a new arr as follows:
//   - return the word plus a space plus the length of the word
// - rtn the new arr

function wordLengths(str) {
  if (str === undefined || str === '') return [];
  return str.split(' ').map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

console.log(wordLengths(undefined)); // []
