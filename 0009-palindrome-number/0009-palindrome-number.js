/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reverseNumber = Number(String(x).split('').reverse().join(''));
    return x === reverseNumber;
};