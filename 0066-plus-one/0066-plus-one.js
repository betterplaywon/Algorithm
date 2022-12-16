/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const digitsIdx = digits.length - 1;
  for(let i = digitsIdx; i >= 0; i--) {
      if(digits[i] !== 9) {
          digits[i]++;
          return digits;
      } else{
          digits[i] = 0;
      }
  }
    return [1, ...digits]
};