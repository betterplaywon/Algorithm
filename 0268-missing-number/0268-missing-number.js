/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let result;
    nums.sort((a,b) => a-b);
    
    const numsLength = nums.length + 1;
    
    for(let i=0; i < numsLength; i++) {
        if(!nums.includes(i)) result = i;
    }
    return result;
};