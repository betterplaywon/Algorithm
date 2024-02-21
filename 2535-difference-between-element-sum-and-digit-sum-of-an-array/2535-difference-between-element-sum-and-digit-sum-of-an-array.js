/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let digitSum=0;
    const elementSum = nums.reduce((acc, cur)=> acc+cur);
    
    for(let i=0; i<nums.length; i++) {
        if(String(nums[i]).length > 1) {
            const digitNum = String(nums[i]).split('').map(Number);
            nums[i] = digitNum.reduce((acc,cur) => acc+cur);
        }
        digitSum += nums[i];
    }
   return elementSum - digitSum;
};