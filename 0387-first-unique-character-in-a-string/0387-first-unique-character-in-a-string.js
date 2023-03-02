/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(let i =0; i < s.length; i++) {
        const coincideString = s.indexOf(s[i]) === s.lastIndexOf(s[i]);
        if(coincideString) {
            return i;
        }
    }
    return -1;
};