/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    const expected = [...heights].sort((a,b)=> a-b);
    const mapping = expected.map((expectedNum,idx)=> expectedNum !== heights[idx] && count++);
 return count;
};