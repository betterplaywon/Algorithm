/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count =0;
    let output = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === 'R') {
            count++;
        } else {
            count--;
        }
        count === 0 ? output++ : output;
    }
   return output;
};