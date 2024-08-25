/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=> a-b);
    let diff = arr[1] - arr[0];
    let output = [];

    for(let i=1; i<arr.length; i++) {
        let compare = arr[i] - arr[i-1];

        if(compare < diff) {
            diff = compare;
            output = [[arr[i-1],arr[i]]];
        } else if(compare === diff) {
            output.push([arr[i-1],arr[i]]);
        }
    }
    return output;
};