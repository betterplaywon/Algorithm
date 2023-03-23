/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    let newNum = 0;
    let maxNum = 0;
    
    // 현재 idx가 1이고 다음 idx가 1이면 newNum을 1씩 올리고, 그게 아니라면 newNum을 초기화시킨다.
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i]===1) {
         newNum+=1;
            
            if(maxNum < newNum){
              maxNum = newNum;
            }
            
        } else {
         newNum=0;
        }
    }
    
   return Math.max(newNum, maxNum);
};


