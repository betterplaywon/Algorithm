/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let output=[];
    
    target.sort((a,b)=> a-b);
    arr.sort((a,b)=> a-b);
    
    for(let i=0; i<target.length; i++) {
        target[i] === arr[i] ? output.push(true) : output.push(false);
    }
    return output.includes(false) ? false : true;
};