/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n=== 1) return 1;
    
    for(let i=1; i<n; i++) {
        const x = (i*(i+1)) / 2;
        const y = ((n-i+1) * (n+i)) / 2;
        if(x === y) return i;
    }
   return -1;
};