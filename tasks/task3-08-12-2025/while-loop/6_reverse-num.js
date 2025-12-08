// 6. Reverse a number

// Use a while loop to reverse a given number.
// Example: Input: 1234 → Output: 4321

var num = 456
var reverse = 0
while (num != 0) {                         //456   45     4      0 F 
    let digit = num % 10                   // 6     5     4
    reverse = reverse * 10 + digit         // 6    65     654  

    num = Math.floor(num / 10)             //45     4      0
}
console.log(reverse);
