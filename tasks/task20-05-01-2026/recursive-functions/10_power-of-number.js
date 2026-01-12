// JS Recursion Task: 10_power-of-number.js
// Write a recursive function to find the power of a number (xⁿ).

function power(x, n) {
    if (n === 0) return 1;
    return x * power(x, n - 1);
}

console.log(power(2, 5)); 


