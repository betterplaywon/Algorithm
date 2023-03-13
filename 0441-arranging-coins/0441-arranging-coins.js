/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let row = 0;
   while(n-row > 0){
       row++;
       n -= row;
   }
    return row;
};