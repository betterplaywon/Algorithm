/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const arr = [];
    
    for(let i=0; i<names.length; i++) {
        arr.push({name: names[i], height: heights[i]});
    }
    
    const output = arr.sort((a,b)=> b.height - a.height).map((item)=> item.name);
    return output;
};