/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
   return details.filter((userInfo)=> Number(userInfo.substring(11,13)) > 60).length;
};