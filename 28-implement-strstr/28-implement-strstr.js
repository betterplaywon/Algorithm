/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// slice와 substring 중 runtime은 substring이 빠르기 때문에 substring 사용

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