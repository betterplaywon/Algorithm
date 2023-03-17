/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const result = String((x^y).toString(2)).split('0').join('').length;
    return result;
};