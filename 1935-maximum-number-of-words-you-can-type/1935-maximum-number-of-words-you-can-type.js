/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const seperateText = text.split(' ');
    let output = 0;
    
    for(const text of seperateText) {
        for(let i=0; i<text.length; i++) {
            if(brokenLetters.includes(text[i])) {
                output++;
                break;
            }
        }
    }
    return seperateText.length - output;
};