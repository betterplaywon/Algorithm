/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b)=> a-b);
    students.sort((a,b)=> a-b);
    const mapping = seats.map((num,idx)=> Math.abs(num-students[idx]));
    return mapping.reduce((acc,cur)=> acc+cur);
};