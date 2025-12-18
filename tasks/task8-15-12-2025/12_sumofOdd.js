
//  Write a program using a while loop to find the sum of odd digits in a given number.



function sumOfOdd(num) {
    var i = 1
    var sum = 0
    while (i <= num) {
        if (i % 2 == 1) {
            sum += i
        }
        i++
    }
    return sum
}

console.log(sumOfOdd(10));

