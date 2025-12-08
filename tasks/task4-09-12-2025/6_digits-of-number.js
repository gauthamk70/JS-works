// 6. Print the digits of a number

// Input: num = 98765
// Use a for loop to print each digit using modulus (%) and division.

var num = 98765
for (let i = num; i > 0; i = Math.floor(i / 10)) {
    let digit = i % 10
    console.log(digit);

}