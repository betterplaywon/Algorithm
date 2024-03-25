/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0;

    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            const condition1 = nums[i] === nums[j];
            const condition2 = (i*j) % k === 0;
            if(condition1 && condition2) {
                count++;
            }
        }
    }
    console.log(count)
    return count;
};