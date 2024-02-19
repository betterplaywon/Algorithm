/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count =0;
    let output = 0;
    
    for(let i=0; i<s.length; i++) {
       s[i] === 'R' ? count++ : count--;
        count === 0 ? output++ : output;
    }
   return output;
};