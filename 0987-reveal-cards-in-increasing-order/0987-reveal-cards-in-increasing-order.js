/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=> b-a);
    const output = [];

    for(const card of deck) {
        // if(output.length > 0) output.unshift(output[output.length-1]);
        if(output.length > 0) output.unshift(output.pop());
        output.unshift(card);
    }
    return output;
};