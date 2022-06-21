/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     /*  1. 들어온 숫자를 반대로 뒤집는다.
         2. 만약 들어온 숫자와 반대로 뒤집은 숫자가 같다면 true, 아니라면 false */
    const reverseToConvert = String(x).split('').reverse().join('');
    const convertNum = Number(reverseToConvert);
        return x === convertNum ? true : false;
};