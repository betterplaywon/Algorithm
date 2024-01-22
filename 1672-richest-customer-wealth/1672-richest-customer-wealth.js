/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     const result=[];
    for(let account of accounts) {
        result.push(account.reduce((acc,cur)=> acc+cur,0));
    }
    return Math.max(...result)
};