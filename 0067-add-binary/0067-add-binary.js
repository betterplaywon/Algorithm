/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  // Number 대신 BigInt 필요
    const aInt = `0B${a}`
    const bInt = `0B${b}`
    
    const sum = BigInt(aInt) + BigInt(bInt);
    const result = sum.toString(2);
    return result;
};