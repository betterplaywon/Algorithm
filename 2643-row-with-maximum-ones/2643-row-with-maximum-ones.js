/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let count=0, row=0;
    
    for(let i=0; i<mat.length;i++) {
        const hasNumberLength = mat[i].filter((num)=> num !== 0).length;
        if(count < hasNumberLength) {
            count = hasNumberLength;
            row = i;
        }
    }
    return [row, count]
};