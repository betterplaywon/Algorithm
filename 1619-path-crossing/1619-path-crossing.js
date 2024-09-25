/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const set = new Set();
    let x = 0, y = 0;
    set.add(`${x},${y}`);

    for(const direction of path) {
        if(direction === 'N') y++;
        else if(direction === 'S') y--;
        else if(direction === 'E') x++;
        else if(direction === 'W') x--;

        if(set.has(`${x},${y}`)) return true;
        set.add(`${x},${y}`);
    }
    return false;
};