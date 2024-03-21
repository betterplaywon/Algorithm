/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let count = 0;
    const lowerCase = s.toLowerCase().split('');
    for(let i=1; i<lowerCase.length; i++) {
        const letterCompare = lowerCase[i] !== lowerCase[i-1];
        if(letterCompare) count++;
    }
    return count;
};