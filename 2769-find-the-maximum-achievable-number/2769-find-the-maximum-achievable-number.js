/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    //4 + 1 ? = 6. ?는 1 또는 2일 수 있다. 4+1+1 또는 4+(1*2)
    //3 + 2 ?  = 7. ?는 2이다. 3+2+2 또는 3+(2*2);
    //*2라는 공통점이 있으므로 *2로 접근
    
    return num+(t*2);
};