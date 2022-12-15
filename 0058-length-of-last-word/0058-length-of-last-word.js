/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
      const organizeWord = s.trim().split(' ')
    const lastWord = organizeWord[organizeWord.length -1];
    return lastWord.length;
};