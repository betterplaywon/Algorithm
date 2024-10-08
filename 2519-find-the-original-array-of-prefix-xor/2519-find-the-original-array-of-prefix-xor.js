/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = new Array(pref.length);
    arr[0] = pref[0];

    for(let i=1; i<pref.length; i++) {
        const xor = pref[i] ^ pref[i-1];
        arr[i] = xor;
    }
    return arr;
};