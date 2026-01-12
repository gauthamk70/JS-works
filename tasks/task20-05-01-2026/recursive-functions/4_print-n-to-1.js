// JS Recursion Task: 4_print-n-to-1.js

// Write a recursive function to print numbers from n to 1.
function nToOne(n){
    if(n==0){
        return
    }
    console.log(n);
    nToOne(n-1)
    
}
nToOne(5);
