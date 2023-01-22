/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
   if(s.length !== t.length) return false;
    
    let result;
    
    for(let i = 0; i < s.length; i++){
        if(s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return result = false;
        }
    }
    return result = true;
};