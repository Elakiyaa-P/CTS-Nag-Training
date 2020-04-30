var output = fizzBuzz('Elite');
console.log(output);
function fizzBuzz(input) {
    // let sum:number=0;
    // while(input!=0){
    //     let remainder:number=input%10;
    //     sum=sum+remainder;
    //     input=input/10;
    // }
    // let sumofdigit:number=sum
    if (typeof input !== 'number') {
        return NaN;
    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return "FizzBuzz";
    }
    else if (input % 3 === 0) {
        return "Fizz";
    }
    else if (input % 5 === 0) {
        return "Buzz";
    }
    else {
        return input;
    }
}
