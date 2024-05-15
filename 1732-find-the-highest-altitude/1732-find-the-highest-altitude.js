/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let point = 0;
    const arr = [];
    arr[0] = 0;
    
   for(let i=0; i<gain.length; i++) {
       point+= gain[i]
       arr.push(point);
   }
    return Math.max(...arr);
};