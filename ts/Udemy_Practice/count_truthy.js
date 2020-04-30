var array = [1, 2, 3, 4, 5, " ", "Elite", null, undefined, 0, false];
console.log(countTruthy(array));
function countTruthy(array) {
    var count = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var value = array_1[_i];
        if (value)
            count++;
    }
    return count;
}
