/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let teams = n, matches = 0;
    
    while(teams > 1) {
        if(teams%2 !== 0) {
            matches += (teams-1)/2;
            teams = (teams-1)/2+1;
        } else {
            matches += teams/2;
            teams = teams/2;
        }
        
    }
    return matches;
};