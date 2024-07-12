/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const arr = [];

    for(let i=0; i<s.length; i++) {
        let count = 0;
        let [row, col] = startPos;

        for(let j=i; j<s.length; j++) {
            if(s[j] === 'R') col++;
            else if(s[j] === 'L') col--;
            else if(s[j] === 'D') row++;
            else if(s[j] === 'U') row--;

            if(row > n-1 || col > n-1 || row < 0 || col < 0) {
                break;
            }
            count++;
        }
       arr.push(count);
    }
    return arr;
};