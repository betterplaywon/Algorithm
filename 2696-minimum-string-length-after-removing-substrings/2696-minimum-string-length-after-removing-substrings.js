/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
   const hasAB = s.includes('AB');
   const hasCD = s.includes('CD');
    
    while(s.includes('AB') || s.includes('CD')) {
        if(s.includes('AB')) {
            s = s.replace('AB', '');
        }
        if(s.includes('CD')) {
            s = s.replace('CD', '');
        }
    }
    return s.length;
};