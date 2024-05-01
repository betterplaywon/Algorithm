/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    
    const arr = ['a', 'e', 'i', 'o', 'u'];
    const a = sentence.split(' ');
    let ending = 'a';
    let w = '';
    
    return a.map((word, i) => arr.includes(word[0].toLowerCase()) ? 
             [...word, 'ma', ...Array(i + 1).fill('a')].join('') 
             : 
             [...word.slice(1), word[0], 'ma', ...Array(i + 1).fill('a')].join(''))
        .join(' ');
};