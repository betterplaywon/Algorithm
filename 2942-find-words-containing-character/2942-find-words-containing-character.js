/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let result=[];
    
    for(let i=0; i<words.length; i++) {
        const hasWord = words[i].includes(x);
        hasWord && result.push(i);
    }
    return result;
};