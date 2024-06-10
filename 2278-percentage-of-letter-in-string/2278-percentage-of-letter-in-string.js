/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const filter = s.split('').filter((num)=> num === letter);
    return Math.floor((filter.length / s.length) * 100);
};