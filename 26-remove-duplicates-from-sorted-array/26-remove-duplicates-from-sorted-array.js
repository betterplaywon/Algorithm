/**
 * @param {number[]} nums
 * @return {number}
 */

// number type의 데이터가 담긴 배열을 인자로 받아 중복되는 number를 없앤다.
// 새로운 배열을 만드는 것이 아닌 기존 배열을 사용해 문제를 해결해야 해서
// 공부한 Set은 사용해보지 못하게 되었다.
// slice를 사용했지만 slice는 원본 배열에는 영향을 주지 않기 때문에 splice 사용
// 하지만 index를 0번부터 1씩 커가는 식으로 반복문을 시행하면 3개 이상 중복인 값은 제대로 지워지지 않는다는 말을 보게 되었다.
// 이런 경우에는 뒤에서부터 반복문을 시행하면 된다.

var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === nums[i+1]){
          nums.splice(i,1)
          i--;
      } 
    }
};