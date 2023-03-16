/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    //"aba", "abab"
    for(let i=1; i <= Math.floor(s.length/2); i++) {
        const valid = s.substring(0,i).repeat(s.length/i) === s;
        if(valid) return true
    }
    return false;
};