/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    const reverse = [...s].reverse().join('');
    return s === reverse ? 1 : 2;
};