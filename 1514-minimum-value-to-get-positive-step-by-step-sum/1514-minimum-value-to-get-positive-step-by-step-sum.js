/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let minimum=0,sum=0;

    for(let i=0; i<nums.length; i++) {
        sum+=nums[i];
        minimum = Math.min(minimum, sum);
    }
    return (-1 * minimum)+1
};