/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const output = [];

    for(const char of s) {
        char === '*' ? output.pop() : output.push(char);
    }
    return output.join('');
};