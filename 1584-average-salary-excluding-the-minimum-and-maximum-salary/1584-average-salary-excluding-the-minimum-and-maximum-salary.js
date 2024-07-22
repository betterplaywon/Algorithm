/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    const excepteionArr = [min, max];
    const output = [];
    
    for(const salaryPart of salary) {
        if(excepteionArr.indexOf(salaryPart) === -1) output.push(salaryPart);
    }
    return output.reduce((acc,cur)=> acc+cur) / output.length;
};