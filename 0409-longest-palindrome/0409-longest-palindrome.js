/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    const map = new Map();
    let result = 0;
    
    for(let i=0; i < s.length; i++) {
      if(map.has(s[i])) {
          result += 2;
          map.delete(s[i]);
      } else {
          map.set(s[i]);
      }
    }
    
    if(map.size > 0) result++;
    
    return result;
    
};