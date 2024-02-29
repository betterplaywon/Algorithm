/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const flat = edges.flatMap((num)=> num).slice(0,4);
    const result = flat.filter((ele,idx)=> flat.indexOf(ele) !== idx).flat();
    return result;
};