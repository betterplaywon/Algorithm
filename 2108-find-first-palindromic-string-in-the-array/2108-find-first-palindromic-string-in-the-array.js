/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    const wordArr = [];
    for(let word of words) {
        const reverseWord = word.split('').reverse().join('');
       word === reverseWord && wordArr.push(word);
    }
    return wordArr.length > 0 ? wordArr[0] : '';
};