/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(!n) return false;
    // if(n === 1) return true;
    
    // const primeFactors = [2,3,5];
    // for(let i=0; i<primeFactors.length; i++) {} 
    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;
    
    return n === 1;
    
};