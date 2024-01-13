/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 새로운 배열에 추가 금지
    // index 문제가 발생할 땐 역순으로 접근해보기
    
    for(let i=nums.length-1; i>0;i--) {
        if(nums[i] === nums[i-1]) {
        nums.splice(i,1);
        }
    }
};