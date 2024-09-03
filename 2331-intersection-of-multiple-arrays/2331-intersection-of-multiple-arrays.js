/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const output = [];
    for(let i=0; i<nums[0].length; i++) {
        const commonNumber = nums.every((arr)=> arr.includes(nums[0][i]));
        if(commonNumber) {
            output.push(nums[0][i]);
        }
    }
    return output.sort((a,b)=> a-b);
};