/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const hashMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!hashMap.has(char)) {
            hashMap.set(char, i);
        } else {
            const firstIndex = hashMap.get(char);
            const expectedDistance = distance[char.charCodeAt(0) - 'a'.charCodeAt(0)];
            if (i - firstIndex - 1 !== expectedDistance) {
                return false;
            }
        }
    }
    return true;
};