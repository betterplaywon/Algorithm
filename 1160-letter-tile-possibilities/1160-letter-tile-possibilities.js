/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    const set = new Set();

    const recursion = (char, tiles) => {
        if(set.has(char)) return; 
        char && set.add(char);

        for(let i=0; i<tiles.length; i++) {
            const newTiles = tiles.slice(0, i) + tiles.slice(i+1);
            recursion(char+tiles[i], newTiles);
        }
    }
    recursion("", tiles);
    return set.size;
};