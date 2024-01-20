/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const sort = points.sort((a, b) => a[0] -b[0]);
    let result=0;
    
    for(let i=1; i<points.length; i++) { // i=0 시도 시 test 실패.
        result=Math.max(result, sort[i][0]-sort[i-1][0]);
    }
   return result;
};