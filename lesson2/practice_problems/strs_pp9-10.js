let language = 'JavaScript';

// pp9
let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4)); // 'avaS'
console.log(language.substr(vIndex, 4)); // 'vaSc'

// pp10
console.log(language.substring(aIndex, 4)); // 'ava'
console.log(language.substring(vIndex, 4)); // 'va'
