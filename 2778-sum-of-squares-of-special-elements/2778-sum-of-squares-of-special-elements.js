/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const output = [];
    
    for(let i=0; i<nums.length; i++) {
        if(nums.length  % (i+1) === 0) {
            output.push(nums[i]*nums[i]);
        }
    }
    return output.reduce((acc,cur)=> acc+cur,0);
};