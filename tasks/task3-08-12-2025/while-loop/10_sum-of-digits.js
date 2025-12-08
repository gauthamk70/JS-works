// 10. Sum of digits

// Use a while loop to find the sum of digits of a number.
// Example: 245 → 2 + 4 + 5 = 11

var num = 333
var sum = 0
while (num != 0) {
    let digit = num % 10
    sum = sum + digit
    num = Math.floor(num / 10)

}
console.log(sum);
