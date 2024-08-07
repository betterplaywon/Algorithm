/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const output = [];

    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            if(prices[i]>=prices[j]) {
                prices[i]-=prices[j];
                break;
            }
        }
        output.push(prices[i]);
    }
    return output;
};