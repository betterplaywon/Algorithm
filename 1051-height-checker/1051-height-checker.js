/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    
    let output = 0;
    const ascending = [...heights].sort((a,b)=> a-b);
    
    for(let i=0; i< heights.length; i++) {
        if(heights[i] !== ascending[i]) {
            output++;
        }
    }
    return output;
};