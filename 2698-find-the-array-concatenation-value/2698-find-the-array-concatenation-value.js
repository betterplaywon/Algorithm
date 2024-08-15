/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    const concatenationArr = [];
    const halfNum = Math.floor(nums.length / 2);
    let count = 1;

    for(let i=0; i<nums.length; i++) {
        if(i >= halfNum) break;
       concatenationArr.push(String(nums[i]) + String(nums[nums.length-count]));
       count++;
    }
    const convert = concatenationArr.map((num)=>+num);
    const isEvenLength = nums.length % 2 !== 0;
    const reduceConcatenationArr = convert.reduce((acc,cur)=> acc+cur,0);
   return  isEvenLength ? reduceConcatenationArr+nums[halfNum] : reduceConcatenationArr;
};