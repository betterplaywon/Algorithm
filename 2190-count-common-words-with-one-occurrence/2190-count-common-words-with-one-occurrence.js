/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0;

for(let i = 0; i<words1.length; i++) {
    const condition1 = words1.indexOf(words1[i]) === words1.lastIndexOf(words1[i]);
    const condition2 = words2.indexOf(words1[i]) >= 0;
    const condition3 = words2.indexOf(words1[i]) === words2.lastIndexOf(words1[i]);
    
    if(condition1 && condition2 && condition3) {
        count++;
    }
}
return count;
};