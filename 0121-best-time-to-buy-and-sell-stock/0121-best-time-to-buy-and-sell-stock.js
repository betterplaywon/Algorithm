/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice = 0;
    let minPrice = Infinity;

    for(let i=0; i<prices.length; i++) {
       if(prices[i] < minPrice) {
        minPrice = prices[i];
       }else if(prices[i] > minPrice){
       maxPrice = Math.max(maxPrice, prices[i]-minPrice);
       }
    }
   return maxPrice;
};