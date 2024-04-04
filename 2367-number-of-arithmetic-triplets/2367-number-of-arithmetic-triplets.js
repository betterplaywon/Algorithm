/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    const NUMS_SET = new Set(nums);
    let output = 0;
    
    for(const num of NUMS_SET) {
        const condition1 = NUMS_SET.has(num - diff);
        const condition2 = NUMS_SET.has(num - (diff * 2));
        if(condition1 && condition2) output++;
    }
    return output;
};