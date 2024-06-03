/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let output = ''
    let countOne = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i]=== '1') countOne++;
    }
    
    const countZero = s.length - countOne;
    output = '1'.repeat(countOne-1) + '0'.repeat(countZero)+"1";
    return output;
};