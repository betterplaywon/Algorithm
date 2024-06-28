/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    const laserMapping = bank.map((laserLocation) => laserLocation.split('0').join('').length).filter((laserNum)=> +laserNum);
    const laserCount= laserMapping.reduce((acc,cur,idx,arr)=> acc+cur*(arr[idx+1] || 0),0);
    return laserCount;
};