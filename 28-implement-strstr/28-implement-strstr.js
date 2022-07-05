/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    if(needle === 0) return 0;
    
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
           const cutHaystack = haystack.substring(i, i+needle.length);
            if(cutHaystack === needle) {
                return i;
            }
         }
    }
  return -1;
};