/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const output = [];
    
    for(let i=0; i<nums.length; i++) {
       const num = String(nums[i]);
        const numLength = num.length;
    numLength > 1 ? output.push(...num.split('').map(Number)) : output.push(nums[i]);
    }
    return output;
};