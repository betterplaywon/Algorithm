/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // i와 extraCandies를 더한 값이 배열의 최고값과 같거나 높으면 true, 아니면 false
    
    const greatestNumber = Math.max(...candies);
    let result=[];
    
    for(let i=0; i<candies.length; i++) {
      candies[i] + extraCandies >= greatestNumber
          ? result.push(true)
        : result.push(false);
    }
    return result;
};