// JS Recursion Task: 3_sum-of-n-numbers.js

// Write a recursive function to find the sum of first n natural numbers.
function sumOfN (n){
    if(n==0){
        return 0
    }
    return n+sumOfN(n-1)
}
console.log(sumOfN(5));
