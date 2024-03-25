/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let output = [];
    const lengthSum = word1.length + word2.length;
    
    for(let i=0; i<lengthSum; i++) {
        output.push(word1[i]);
        output.push(word2[i]);
    }
    return output.join('');
};