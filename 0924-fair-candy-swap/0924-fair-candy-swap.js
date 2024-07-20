/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceTotal = 0,bobTotal = 0;
    const set = new Set(bobSizes);
    const output = [];

    for(const candy of aliceSizes) aliceTotal += candy;
    for(const candy of bobSizes) bobTotal += candy;

    const average = (bobTotal-aliceTotal)/2;

    for(const candy of aliceSizes) {
        if(set.has(candy+average)) {
            output.push(candy,candy+average);
            break;
            };
    }
    return output;
};