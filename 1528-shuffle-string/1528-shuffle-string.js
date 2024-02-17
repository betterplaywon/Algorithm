/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  const newS = new Array(s.length);
    
    for(let i=0; i<s.length; i++) {
      newS[indices[i]] = s[i];
    }
   return newS.join('');
};