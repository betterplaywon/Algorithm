/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length+1; j++) {
            let slice = arr.slice(i,j);
            if(slice.length%2 === 1) {
                sum += slice.reduce((acc,cur)=> acc+cur,0);
            }
        }
    }
   return sum;
};