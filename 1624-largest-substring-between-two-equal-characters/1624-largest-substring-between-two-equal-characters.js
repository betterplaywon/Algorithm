/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
   let num = -1;
    
    for(let i=0; i<s.length; i++) {
        let isEqual = s.lastIndexOf(s[i]);
        num = num < isEqual - i - 1 ? isEqual - i - 1 : num;
    }
    return num;
};