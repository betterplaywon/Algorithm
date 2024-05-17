/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    
    const arr = ['a', 'e', 'i', 'o', 'u'];
    const dividedSentence = sentence.split(' ');
    
    return dividedSentence.map((word, i) => arr.includes(word[0].toLowerCase()) ? 
             [...word, 'ma', 'a'.repeat(i+1)].join('') 
             : 
             [...word.slice(1), word[0], 'ma', 'a'.repeat(i+1)].join(''))
        .join(' ');
};