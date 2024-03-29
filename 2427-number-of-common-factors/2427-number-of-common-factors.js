/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0;
    const isBigNum = a>b ? a : b;
    
    for(let i=1; i<=isBigNum; i++) {
        if(a%i === 0 && b%i === 0) count++;
    }
    return count;
};