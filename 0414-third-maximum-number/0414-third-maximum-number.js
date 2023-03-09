/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const sort = nums.sort((a,b)=> b-a);
    const set = new Set(sort);
    const spread = [...set];
    
    if(spread.length <= 2) {
         return Math.max(...spread);
    } else if(spread.length === 3){
         return Math.min(...spread);
    } else {
        return spread[2];
    }
};