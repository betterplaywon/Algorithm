/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    letters.sort();
    let output= '';
    
    for(const letter of letters) {
        if(letter > target) {
            output = letter;
            break;
        }
    }
    if(output === '') return output = letters[0];   
    return output;
};