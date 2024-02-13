/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr = [];
    
    for(let i=0; i<n+1; i++) {
        if(i%3 === 0 || i%5 === 0 || i%7 === 0) {
            arr.push(i);
        }
    }
    return arr.reduce((acc,curr)=> acc+curr,0);
};