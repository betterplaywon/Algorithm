/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const output = [];
    
    if(n%2 !== 0) output.push(0);
    
    for(let i=1; i<=Math.floor(n/2); i++) {
        output.push(i,-i);
    }
    return output;
};