/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const evenArr = [];
    const oddArr = [];
    const output =[];

    for(const num of nums) {
        num%2===0 ? oddArr.push(num) : evenArr.push(num);
    }
    evenArr.sort((a,b)=> a-b);
    oddArr.sort((a,b)=> b-a);

    for(let i=0; i<nums.length; i++) {
        if(output.length < nums.length) {
            output.push(oddArr[i]);
            output.push(evenArr[i]);
        }
    }
    return output;
};