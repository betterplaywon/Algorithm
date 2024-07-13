/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const calc = (image, row, col, prevColor, newColor) => {
if(row<0 || row>=image.length || col<0 || col>=image[0].length ||
prevColor === newColor || image[row][col] !== prevColor) {
    return;
}
image[row][col] = newColor;

calc(image,row+1,col,prevColor, newColor);
calc(image,row-1,col,prevColor, newColor);
calc(image,row,col+1,prevColor, newColor);
calc(image,row,col-1,prevColor, newColor);
}

var floodFill = function(image, sr, sc, color) {
    calc(image,sr,sc,image[sr][sc], color);
    return image;
};