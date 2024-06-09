/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    const output = [];
    
    for(const word of words) {
        output.push(...word.split(separator));
    }
    return output.filter((word)=> word);
};