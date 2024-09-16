/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    
const rowLength = grid.length, colLength = grid[0].length;
let col = new Array(colLength).fill(0), row = new Array(rowLength).fill(0);
let zerosCol = new Array(colLength).fill(0), zerosRow = new Array(rowLength).fill(0);

for(let i=0; i<rowLength; i++) {
    for(j=0;j<colLength; j++) {
        row[i] = row[i] + grid[i][j];
        col[j] = col[j] + grid[i][j];

         if(grid[i][j] === 0) {
        zerosRow[i]=zerosRow[i]+1;
        zerosCol[j]= zerosCol[j]+1;
        }
    }
}

for(let i=0; i<rowLength; i++) {
    for(let j=0; j<colLength; j++) {
        grid[i][j] = row[i]+col[j]-zerosRow[i]-zerosCol[j];
    }
}
return grid;
};