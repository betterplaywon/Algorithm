/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=> a-b);
    const length = arr.length;
    const minimum = Math.floor(length * 0.05);
    const maximum = length - minimum;
    let sum = 0;

    for(let i=minimum; i<maximum; i++) {
        sum+=arr[i];
    }
    // console.log({sum, minimum, maximum})
    return sum/(maximum-minimum);
    
};