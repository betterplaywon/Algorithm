/**
 * @param {number[]} arr
 * @return {number[]}
 */

const sortingProcess = (num) => {
   return num.toString(2).split('0').join('').length;
}

var sortByBits = function(arr) {
   return arr.sort((a,b)=> sortingProcess(a) - sortingProcess(b) || a - b);
};