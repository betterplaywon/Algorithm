/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    // U 다음이 D거나 D 다음이 U인 경우, L 다음이 R이거나 R 다음이 L인 경우만 true. 나머지의 경우엔 false.
    // 그렇다면 switch 문으로 만드는 게 더 유리하나?
    
    let horizonCount=0;
    let verticalCount=0;
    
    for(let i=0; i<moves.length; i++) {
        if(moves[i] === 'U') verticalCount++;
        else if(moves[i] === 'D') verticalCount--;
        else if(moves[i] === 'R') horizonCount++;
        else horizonCount--;
    }
    return horizonCount === 0 && verticalCount === 0;
};