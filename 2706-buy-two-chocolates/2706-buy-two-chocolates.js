/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=> a-b);
    
    const twoChocolates = prices[0] + prices[1];
    if(money < twoChocolates) return money;
    return money - twoChocolates;
};