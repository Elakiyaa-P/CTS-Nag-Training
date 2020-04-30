var marks = [50, 80, 80];
console.log(calculateGrade(marks));
function calculateGrade(marks) {
    var sum = 0;
    for (var _i = 0, marks_1 = marks; _i < marks_1.length; _i++) {
        var mark = marks_1[_i];
        sum += mark;
    }
    var average = sum / marks.length;
    if (average < 60)
        return 'F';
    if (average < 70)
        return 'D';
    if (average < 80)
        return 'C';
    if (average < 90)
        return 'B';
    return 'A';
}
