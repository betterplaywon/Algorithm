/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateArr = date.split(' ');
    const findDay = dateArr[0].match(/\d+/)[0];
    const day = findDay > 9 ? findDay : `0${findDay}`;
    const monthIndex = monthArr.indexOf(dateArr[1]) + 1;
    const month = monthIndex >= 10 ? monthIndex: `0${monthIndex}`;
    const year = dateArr[2];
    return `${year}-${month}-${day}`;
};