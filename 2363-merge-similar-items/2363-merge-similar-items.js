/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
   const output = {};
    let allItems = [...items1, ...items2];
    
    for(const [value,weight] of allItems) {
        if(output[value]) {
            output[value]+=weight;
        } else {
            output[value]=weight;
        }
    }
    return Object.entries(output);
};