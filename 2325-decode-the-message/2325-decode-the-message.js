/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const keyArr = key.replaceAll(" ", "").split('');
    const keySet = [...new Set(keyArr)];
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split('');
    let output = [];
    
    for(let i=0; i<message.length; i++) {
        if(message[i] !== " ") {
            let idx = keySet.indexOf(message[i]);
            output.push(alphabetArr[idx]);
        } else {
            output.push(" ");
        }
    }
    return output.join("");
};