/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
   
    const word = s.split(' ');
    const map = new Map();
    const patternSet = new Set(pattern);
    const sSet = new Set(word);
    
    if(pattern.length !== word.length) return false;
    if(patternSet.size !== sSet.size) return false;
    
    for(let i=0; i<pattern.length; i++){
        if(map.has(pattern[i]) && map.get(pattern[i]) !== word[i]) return false;
        map.set(pattern[i],word[i]);
        
    }
    return true;
};