/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;

   let STEP_ONE = 1, STEP_TWO = 2;
   let TOTAL_STEP = 0;

   for(let i=3; i<=n; i++) {
    TOTAL_STEP = STEP_ONE + STEP_TWO; // 5 기준. 3-> 5 -> 8
    STEP_ONE = STEP_TWO; // 0 -> 2 -> 2
    STEP_TWO = TOTAL_STEP; // 0 -> 3 -> 5
   }
   return TOTAL_STEP;
};