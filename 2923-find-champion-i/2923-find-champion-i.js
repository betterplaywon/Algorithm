/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    const output = [];
    
    for(let i=0; i<grid.length; i++){
        const curSum = grid[i].reduce((acc,cur)=> acc+cur,0);
        output.push(curSum);
    }
    return output.indexOf(Math.max(...output));
};