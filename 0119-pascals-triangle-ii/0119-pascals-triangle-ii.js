/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1,1];
  
    const prev = getRow(rowIndex - 1);
    let result = [1];
    
    for(let i = 1; i < rowIndex; i++) {
        result.push(prev[i-1] + prev[i]);
    }
    result.push(1)
    
   return result;
};