// abstractions:
// - for the word arg
//   - split the word into an arr of chars
//   - sort the arr of chars
//   - join the arr of chars to form a newWord
// - map each word in the list to a newList, as per the word arg
// - filter each word from the list where the newList word equals the newWord
// - rtn the filtered list

function anagram(word, list) {
  let newWord = letterSort(word);
  let newList = list.map(letterSort);
  // we are interested in ndx positions in the newList where the newList word
  // equals the newWord;
  // we want to filter words in the original list that are at those indices
  return list.filter((listWord, ndx) => newList[ndx] === newWord);
}

function letterSort(str) {
  return str.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
