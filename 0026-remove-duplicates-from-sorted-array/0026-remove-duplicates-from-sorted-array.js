/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
     if(!nums) return 0;
    
    for(let i =0; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) {
           result = nums.splice(i,1);
            i--;
        }
    }    
}


// var removeDuplicates = function(nums) {
//     if(!nums) return 0;
    
//     const filteringNums = nums.filter((num,idx) => {
//        return nums.indexOf(num) === idx;
//     });
    
//     return filteringNums; // 결과는 맞지만 underscore 추가가 안되어 error 발생?
// };
