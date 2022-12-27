/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1],[1,1]];
    
    let result = [[1],[1,1]];
    
    for(let i = 2; i < numRows; i++) {
        const arr = [1];
        const prev = result[i-1];
        const prevLength = prev.length - 1;
        
        for(let j = 0; j < prevLength; j++) {
            arr.push(prev[j] + prev[j+1]);
        }
        arr.push(1);
        result.push(arr);
    }
    return result;
};