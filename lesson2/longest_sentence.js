let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

// abstractions:
// - split the text into an arr of sentences
//   - sentences delimited by any of [.!?]
//   - remove any num of leading non-word chars
// - split the text into an arr of chars
//   - filter sentence delimiters
// - split each sentence into an arr of words
//   - words delimited by any of [ .!?]
// - map the num of words in each sentence to the arr of sentences
// - determine and output the largest num of words
// - output the sentence corresponding to the largest num of words
//   - append the corresponding sentence delimiter

function longestSentence(text) {
  let sentences = text.split(/[.!?]/).map(sentence => sentence.replace(/^\W*/, ''));
  let sentenceDelimiters = text.split('').filter(char => /[.!?]/.test(char));
  let sentenceLengths = sentences.map(sentence => sentence.split(/[ .!?]/).length);
  let mostWords = Math.max(...sentenceLengths);
  let longestSentenceNdx = sentenceLengths.indexOf(mostWords);
  let longest = sentences[longestSentenceNdx] + sentenceDelimiters[longestSentenceNdx];

  console.log(`The longest sentence has ${mostWords} words.`);
  console.log(longest);
}

longestSentence(longText);
// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
// The longest sentence has 86 words.

// Assuming the last sentence is removed:
longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.';

console.log();
longestSentence(longText);
// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
// The longest sentence has 30 words.

console.log();
longestSentence("    I yam what I yam!");
// console output
// I yam what I yam!
// The longest sentence has 5 words.
