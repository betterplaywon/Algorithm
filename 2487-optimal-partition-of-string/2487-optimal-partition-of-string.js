/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let output = '',count = 0;

    for(const str of s) {
        if(output.includes(str)) {
            output='';
            count++;
        }
        output+=str;
    }
    return count+1;
};