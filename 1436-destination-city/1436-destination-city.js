/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const cityA = paths.map((cities)=> cities[0]);
    const cityB = paths.map((cities)=> cities[1]);
    
    const output = cityB.reduce((prevCity, currCity) => cityA.indexOf(currCity) === -1 ? currCity : prevCity);

   
    return output;
};