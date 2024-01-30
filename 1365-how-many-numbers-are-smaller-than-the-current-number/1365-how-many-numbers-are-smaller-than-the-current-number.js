/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    
    for(let i=0; i< nums.length; i++) {
        const filter = nums.filter((v)=> v < nums[i]);
        result.push(filter.length);  
    }
    
    return result;
};