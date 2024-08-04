/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    
let even=0, odd=0;

    for(const num of position) {
        num % 2 === 0 ? odd++ : even++;
    }
    return Math.min(odd,even);
};