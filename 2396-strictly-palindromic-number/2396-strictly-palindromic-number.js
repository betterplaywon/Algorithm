/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    const binary = n.toString(2);
    const ternary = n.toString(3);
    
    const reverseBinary = binary.split('').reverse().join();
    const reverseTernary = ternary.split('').reverse().join();
    
   return binary === reverseBinary && ternary === reverseTernary ? true : false;
};