/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let output = garbage[0].length, g=0,p=0,m=0;
    
    for(let i=1; i<garbage.length; i++) {
        g += travel[i-1];
        p += travel[i-1];
        m += travel[i-1];
        
        for(const str of garbage[i]) {
            if(str === 'G') {
                output += (g+1);
                g=0;
            } else if(str === 'P') {
                output += (p+1);
                p=0;
            } else if(str === 'M') {
                output += (m+1);
                m=0;
            }
        }
    }
    return output;
};