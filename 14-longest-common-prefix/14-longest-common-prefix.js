/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
    let result = '';
    
   const select = strs[0];
  for(let i = 0; i < select.length; i++){
  const selectResult = select[i];
  	for(let j = 1; j < strs.length; j++){
    if(strs[j][i] !== selectResult ) return result;
    }
       result+=selectResult;
  } 
  return result;
};

longestCommonPrefix(["flower","flow","flight"])