/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let arr=[], minimum = -1; init = 0;
    
    // Example 3 참고. 전부 중복되는 단어라면 index의 합이 가장 높은 것은 제외.
    for(let i=0; i< list1.length; i++) {
        for(let j=0; j<list2.length;j++) {
            if(list1[i] === list2[j] && (minimum<0 || i+j<=minimum)) {
                minimum = i+j;
            }
        }
    }
    
   for(let i=0; i< list1.length; i++) {
        for(let j=0; j<list2.length;j++) {
            if(list1[i] === list2[j] && minimum === i+j) {
                arr[init] = list1[i];
                init++;
            }
        }
    }
 return arr;   
};