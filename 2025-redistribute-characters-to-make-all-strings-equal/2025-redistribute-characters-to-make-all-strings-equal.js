/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const charObj = {};

    for(const word of words) {
       for(const char of word) {
        charObj[char] = (charObj[char]||0) + 1; 
       }
    }
    const individualCharsLength = Object.values(charObj);
    for(const charLength of individualCharsLength) {
        if(charLength % words.length !== 0) return false;
    }
    return true;
};