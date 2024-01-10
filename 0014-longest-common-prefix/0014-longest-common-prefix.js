/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let result = '';
    const firstWord = strs[0];
    
    for(let i=0; i<firstWord.length; i++){
        const element = firstWord[i];
         for(let j=1; j<strs.length; j++) {
           if(strs[j][i] !== element) return result;
            }
        result += element;
    }
    return result;
};