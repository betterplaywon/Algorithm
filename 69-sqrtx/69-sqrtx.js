/**
 * @param {number} x
 * @return {number}
 */

// Math.sqrt(x)만 사용 시, 소수점 처리 불가.Math.floor 사용

var mySqrt = function(x) {
   return Math.floor(Math.sqrt(x))
};