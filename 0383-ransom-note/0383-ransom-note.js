/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {    
    for(let i=0; i<ransomNote.length; i++) {
        let r = ransomNote[i];
        const compareOfM = magazine.includes(r);
        if(!compareOfM) return false;
        magazine = magazine.replace(r,'')
    }
    return true;
};