/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    // i번째의 integer를 score 배열 전체에서 비교
    
    const sort = score.slice().sort((a,b)=>b-a); // 10,9,8,4,3
    let result=[];
    
    for (let i=0; i<score.length; i++) {
      if(score[i] === sort[0]) {
          result.push("Gold Medal");
      } else if(score[i] === sort[1]) {
          result.push("Silver Medal");
      }else if(score[i] === sort[2]) {
          result.push("Bronze Medal");
      } else {
        result.push(String(sort.indexOf(score[i])+1));
      }
    }
    return result;
};