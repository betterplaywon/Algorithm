/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let sum = 0;
    
    for(let i=0; i<s.length; i++) {
        const searchIdx = t.indexOf(s[i]);
        sum += Math.abs(i - searchIdx);
    }
    return sum;
};