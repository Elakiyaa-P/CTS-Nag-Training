checkSpeed(108);
function checkSpeed(speed) {
    var speedLimit = 70;
    var kmsPerHour = 5;
    if (speed < speedLimit + kmsPerHour)
        console.log("Ok");
    else {
        var points = Math.floor((speed - speedLimit) / kmsPerHour);
        if (points >= 12)
            console.log("Lisence Suspended");
        else
            console.log("Points", points);
    }
}
