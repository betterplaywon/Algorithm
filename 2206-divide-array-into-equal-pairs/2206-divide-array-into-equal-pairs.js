/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    nums.sort((a,b)=> a-b);
    let count = 0;
    const divide = nums.length/2;
   
    for(let i=0; i< nums.length; i+=2) {
        nums[i] === nums[i+1] ? count++ : count;
    }
    return count === divide;
};