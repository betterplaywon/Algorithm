/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;

    for(const log of logs) {
        if(log === '../') {
            if(depth > 0) depth-=1;
        } else if(log === './') {
            depth+=0;
        } else {
            depth+=1;
        }
    }
    return depth > 0 ? depth : 0;
};