/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let count = 0;
    const str = String(n);
    
    for(let i=0; i<str.length; i++) {
        i%2 !== 0 ? count-=Number(str[i]) : count+=Number(str[i])
    }
    return count;
};