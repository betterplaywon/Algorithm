/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    // for문으로 stones를 순회
    let count = 0;
    const jewelsArr = jewels.split('');
    
    for(let i=0; i<stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
};