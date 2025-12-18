
//  Write a program using a while loop to calculate the power of a number
// Example: 2^5 = 32

function power(base, exponent) {
    let result = 1
    let i = 1

    while (i <= exponent) {
        result = result * base
        i++
    }

    return result
}

console.log(power(2, 5))  
