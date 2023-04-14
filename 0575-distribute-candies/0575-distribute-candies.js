/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const filterCandyType = new Set(candyType);
    const doctorAdvice = candyType.length;
    
    return Math.min(filterCandyType.size, doctorAdvice/2);
};