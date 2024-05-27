/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count = 0;
    
    for(let i=0; i<words.length; i++) {
        for(let j=i+1; j<words.length; j++) {
            const forward = words[i][0] === words[j][1];
            const reverse = words[i][1] === words[j][0];
            if(forward) {
                if(reverse) count++;
            }
        }
    }
    return count;
};