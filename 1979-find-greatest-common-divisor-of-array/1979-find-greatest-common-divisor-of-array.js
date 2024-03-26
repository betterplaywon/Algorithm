/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let arr = [];
    
    for(let i=0;i<=max; i++) {
        if(min%i === 0 && max%i === 0) {
            arr.push(i);
        }
    }
    return Math.max(...arr);
};