// JS Recursion Task: 5_fibonacci.js

// Write a recursive function to find the nth Fibonacci number.

function fibonacchiOf (n){
    if(n==1){
        return 0
    }
    else if(n==2){
        return 1
    }
    return fibonacchiOf(n-1)+fibonacchiOf(n-2)
}
console.log(fibonacchiOf(5));
