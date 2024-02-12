/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let left = 0;
    let right = nums.reduce((prev,curr)=> prev+curr,0);
    const output = [];
    
    for(let i=0; i<nums.length; i++) {
        right-=nums[i];
        output.push(Math.abs(left-right));
        left+=nums[i];
    }
    return output;
};