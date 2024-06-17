/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let obj = {};
    
    for(let i=0; i<mat.length; i++) {
        const sum = mat[i].reduce((acc,cur)=> acc+cur, 0);
        obj[i] = sum;
    }
    const individualMat = Object.entries(obj);
    const sorting = individualMat.sort((a,b)=> a[1] - b[1]);
    const keyArray = sorting.map(([key,value]) => +key);
    const output = keyArray.slice(0, k);
    return output;
};