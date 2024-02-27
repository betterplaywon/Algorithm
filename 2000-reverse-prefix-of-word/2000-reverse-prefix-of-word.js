/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const a = word.split('').indexOf(ch);
    const b = word.split('').splice(0,a+1);
    const c = word.slice(a+1,word.length);
    return b.reverse().join('')+c;
};