/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
   const obj = {}, arr = [];

   groupSizes.forEach((size,idx)=> {
    if (!obj[size]) {
        obj[size] = [];
        }
        obj[size].push(idx);

        if(obj[size].length === size) {
            arr.push(obj[size]);
            obj[size] = [];
        }
   })
   return arr;
};