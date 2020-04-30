showPrimes(20);
function showPrimes(limit) {
    for (var number = 2; number <= limit; number++) {
        var isPrime = true;
        for (var factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            console.log(number);
    }
}
