/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const arr = [];
    const openSet = new Set(['(', '{', '[']);
    const closeOpenMap = new Map([
      [')', '('],
      ['}', '{'],
      [']', '['],
    ]);
    
    for (let i = 0; i < s.length; i += 1) {
      if (openSet.has(s[i])) {
        arr.push(s[i]);
      } else {
        const pop = arr.pop();
        if (pop !== closeOpenMap.get(s[i])) {
          return false;
        }
      }
    }
    
    return arr.length === 0;  
};