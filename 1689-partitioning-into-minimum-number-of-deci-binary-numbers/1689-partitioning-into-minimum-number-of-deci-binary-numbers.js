/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let output = 0;
    
   for(const str of n) {
       if(output < Number(str)) output = +str;
   }
    return output;
};