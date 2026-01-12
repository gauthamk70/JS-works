// JS Recursion Task: 6_count-digits.js
// Write a recursive function to count the number of digits in a number.
function countDigits(n){
    if(n==0){
        return 0
    }
    return 1+countDigits(Math.floor(n/10))
}
console.log(countDigits(546));

