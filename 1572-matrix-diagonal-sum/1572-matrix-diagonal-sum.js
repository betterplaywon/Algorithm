/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) { 
    let output = 0, start = 0, end = mat.length-1;
    
    for(const row of mat) {
        output += row[start] + row[end];
        if(start === end) output -= row[end];
        start++, end--;
    }
    return output;
};