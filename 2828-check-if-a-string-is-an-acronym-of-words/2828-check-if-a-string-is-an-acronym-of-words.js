/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    
    let firstChar = '';
    
    for(const word of words) {
        firstChar += word[0];
    }
    return firstChar === s
};