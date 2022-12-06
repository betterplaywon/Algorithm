/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const reverseNum = String(x).split('').reverse().join('');
    const convertNum = Number(reverseNum)
    
return x === convertNum ? true : false;
}