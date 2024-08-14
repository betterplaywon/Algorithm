/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const arr =[""];

    for(let i=0; i<s.length; i++) {
        const arrLastChar = arr[arr.length-1];
        const isSameChar = s[i] !== arrLastChar;
        const isSameLowerCase = s[i].toLowerCase() === arrLastChar.toLowerCase();
       isSameChar && isSameLowerCase ? arr.pop() : arr.push(s[i]);
    }
    return arr.join('');
};