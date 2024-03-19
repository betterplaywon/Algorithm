/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let output = 0;
    let monday = 1;
    let money = 1;
    
    for(let i=1; i<n+1; i++) {
        output+=money;
        money++;
        
       if(i%7 === 0) {
           monday++;
           money = monday;
       }
    }
    return output;
};