/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed.split(''));
    const output = words.filter((word)=> 
        word.split('').every((alphabet) => allowedSet.has(alphabet))).length;
        return output;
};