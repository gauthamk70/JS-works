// 7. Count digits in a number

// Use a while loop to count how many digits a number has.
// Example: number = 7864 → Output: 4

var num = 4759
var count = 0

while (num != 0) {
    count++
    num = Math.floor(num / 10)
}
console.log(count);
