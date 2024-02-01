/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const arr = [];
    for(let sentence of sentences) {
        const sentenceLength = sentence.split(' ').length;
        arr.push(sentenceLength);
    }
    return Math.max(...arr);
};