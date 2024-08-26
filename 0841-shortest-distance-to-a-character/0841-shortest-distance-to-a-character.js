/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let currentTarget = s.indexOf(c);
    let nextTarget = currentTarget;
    const output = [];

    for(let i=0; i<s.length; i++) {
        const selectedChar = s[i];

        if(selectedChar === c) {
            currentTarget = i;
            nextTarget = s.indexOf(c,i+1);
        }
        const compare = Math.min(Math.abs(currentTarget-i),Math.abs(nextTarget-i));
        output.push(compare);
    }
    return output;
};