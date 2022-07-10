/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
const deleteBlank = s.trim();
const splitWord = deleteBlank.split(" ");
const result = splitWord[splitWord.length - 1].length;
    return result;
};