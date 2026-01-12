// JS Recursion Task: 1_print-1-to-n.js

// Write a recursive function to print numbers from 1 to n.

function printNumbers (n){
    if(n==0){
        return 
    }
    
    
    printNumbers(n-1)
    console.log(n);

}
printNumbers(6);