// inputs:
// - 2 strs (a word and text to search for the word in)
// outputs:
// - int (the num of occurences of the word in the text)
// reqs:
// - take a word and a text str
// - rtn the num of occurences of the word in the text
// rules:
// - none
// testcases:
// - as below
// struct:
// - str
// algo:
// - create a regex pattern from the word
// - match the word to the text
// - rtn the num of matches

function searchWord(word, str) {
  // let pattern = new RegExp(word, 'gi'); // create a new regex pattern for the word
  let pattern = new RegExp(`\\b${word}\\b`, 'gi'); // match whole words only
  return (str.match(pattern) || []).length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // should return 4, NOT 13
