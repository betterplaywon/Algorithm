/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let sum=0;
    for(let i=0; i<s.length; i++) {
        let now = romanMap[s[i]];
        let next = romanMap[s[i+1]];
        
        if(now<next) {
            sum+=next-now;
            i++;
        } else {
            sum+=now;
        }
    }
    return sum;
};