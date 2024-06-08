/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowelChar = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
   for(let i = left; i <= right; i++) {
       const hasVowel = vowelChar.includes(words[i][0])
       && vowelChar.includes(words[i][words[i].length-1]);
       
       if(hasVowel) count++;
   }
    return count;
};