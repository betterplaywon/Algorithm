/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const convert = n.toString(2);
    
    for(let i=0; i<convert.length; i++) {
        if(convert[i] === convert[i+1]) {
            return false;
        }
    }
    return true;
    
};