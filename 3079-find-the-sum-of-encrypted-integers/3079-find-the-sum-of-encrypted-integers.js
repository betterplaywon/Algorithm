/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfEncryptedInt = function(nums) {
   let sum = 0;
    
    for(const num of nums) {
        const str = String(num);
        const max = Math.max(...str);
        const encrypt = String(max).repeat(str.length);
        sum += (+encrypt);
    }
    return sum;
};