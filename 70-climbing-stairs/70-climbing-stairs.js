/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 3) return n;
    
    let one = 1;
    let two = 2;
    
    for(let i = 3; i <= n; i++) { 
        const result = one + two; // i가 3일 때, result = 3
        one = two; // one에는 2가 할당되고
        two = result; // two에는 3이 할당된다.
    }
    return two
};