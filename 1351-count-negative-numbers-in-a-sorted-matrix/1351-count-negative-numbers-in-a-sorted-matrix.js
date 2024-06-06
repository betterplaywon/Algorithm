/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count =0;
    
    for(const arr of grid) {
        count+= arr.filter((num)=> num < 0).length;
    }
    return count;
};