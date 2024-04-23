/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    const regex = /^[0-9]*$/;
    let output = [];
    
    for(const str of strs) {
       regex.test(str) ? output.push(String(Number(str))) : output.push(str.length);
    }
    
    return Math.max(...output)
};