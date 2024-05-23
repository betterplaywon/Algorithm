/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let output = '';
    let count = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === ')') {
            count--;
        }
        if(count >= 1) {
            output+=s[i];
        }
        
        if(s[i] === '(') {
            count++;
        }
    }
    return output;
};