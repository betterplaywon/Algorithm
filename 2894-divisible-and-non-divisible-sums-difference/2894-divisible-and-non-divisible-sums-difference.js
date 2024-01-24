/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
      const notDivideArr=[];
    const divideArr=[];
    
    const reduceFunc = (numArr) => {
       return numArr.reduce((acc,cur) => acc+cur, 0);
    }
    
    for(let i=1; i<=n; i++) {
        if(i < m) {
         notDivideArr.push(i)
        } else if(i%m === 0) {
            divideArr.push(i);
        } else {
            notDivideArr.push(i);
        }
    }
  
    return reduceFunc(notDivideArr) - reduceFunc(divideArr);
};