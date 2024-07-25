/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b)=> b-a);
    let currentSum = 0;
    const sum = nums.reduce((acc,cur)=> acc+cur,0);
    const output = [];
    
    for(const num of nums){
        currentSum += num;
        output.push(num);
        if(currentSum > sum-currentSum) {
            break;
        }
    }
    return output;
};