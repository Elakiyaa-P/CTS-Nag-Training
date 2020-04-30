console.log("Array Data Structure")
    // //#1 Filtering all even numbers to a new array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // let evens = nums.filter(function(x) {
    //     if (x % 2 === 0)
    //         return x;
    // })
    // console.log(evens);

// let evens = nums.filter(x => x % 2 == 0)
// let evens = nums.filter(x => { return x % 2 == 0 })

// //#2 Filtering all odd numbers to a new array
// let oddNums = []
// for (let i = 0; i < nums.length; i++) {
//     let num = nums[i]
//     if (num % 2 !== 0)
//         oddNums.push(num)
// }
// console.log(oddNums);

// //#3 Filtering all even numbers greater than 4 to a new array
// let even = []
// for (let i = 0; i < nums.length; i++) {
//     let num = nums[i]
//     if (num % 2 === 0 && num > 4)
//         even.push(num)
// }
// console.log(even);

function filter(f) {
    let out = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (f(num))
            out.push(num)
    }
    return out
}
let evenArr = filter(num => num % 2 === 0)