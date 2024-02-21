/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  
    const numStr = String(num).split('');
    let result = 0;
    for(let i=0; i<numStr.length; i++) {
        if(num % Number(numStr[i]) === 0) {
            result++;
        }
    }
  return result;
};