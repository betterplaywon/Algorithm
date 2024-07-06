/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */

const matchingPattern = (word,pattern) => {
const wordMap = new Map();
const patternMap = new Map();

for(let i=0; i<word.length; i++) {
    const wordChar = word[i];
    const patternChar = pattern[i];

if(!wordMap.has(wordChar)) {
    wordMap.set(wordChar,patternChar);
}

if(!patternMap.has(patternChar)) {
    patternMap.set(patternChar, wordChar);
}

if(wordMap.get(wordChar) !== patternChar || patternMap.get(patternChar) !== wordChar) {
    return false;
    }
}
return true;
}

var findAndReplacePattern = function(words, pattern) {

return words.filter((word)=> matchingPattern(word,pattern));
};