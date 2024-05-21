/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    // 최대의 x축 접점과 최대의 y축 접점의 값을 더하기
    let output = 0;
    
    for(let i=0; i<points.length-1; i++) {
        const xPoint = Math.abs(points[i][0]-points[i+1][0]);
        const yPoint = Math.abs(points[i][1]-points[i+1][1]);
        output += Math.max(xPoint,yPoint);
    }
    return output;
};