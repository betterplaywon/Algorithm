/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    const rules = {
        "type": 0,
        "color": 1,
        "name": 2
    };
    
   const applyRule = items.filter((item)=> item[rules[ruleKey]] === ruleValue);
    return applyRule.length;
};