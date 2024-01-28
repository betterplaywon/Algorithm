/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
   const copyCommand = command;
    const interpretRoundBracket = copyCommand.replaceAll('()','o');
    return interpretRoundBracket.replaceAll('(al)','al');
};