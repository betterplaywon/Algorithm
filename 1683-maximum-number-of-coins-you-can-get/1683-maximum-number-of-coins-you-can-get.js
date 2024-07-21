/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a,b)=> a-b);
    const start = piles.length/3;
    let count = 0;

    for(let i=start; i<piles.length; i+=2) {
        count+=piles[i];
    }
    return count;
};