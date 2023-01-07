/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let result = [];
    const sortingNumber = nums.sort((a,b) => a-b);
    
    
    for(let i = 0; i < sortingNumber.length; i++){
        if(sortingNumber[i-1] !== sortingNumber[i] &&
           sortingNumber[i+1] !== sortingNumber[i]){
        result.push(sortingNumber[i]);
        }
    }
    
   return result[0];
    
};