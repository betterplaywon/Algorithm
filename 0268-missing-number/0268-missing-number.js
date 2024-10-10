/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let idxSum = 0, numsSum = 0;
    const length =nums.length;
    for(let i=0; i<length; i++) {
        idxSum+=i;
        numsSum+=nums[i];
    }
    return (idxSum+length)-numsSum;
};