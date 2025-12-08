// 8. Check if a number is prime

// Use a for loop to check if a given number is prime or not.

var num =8
var isPrime=true
for(let i = 2 ; i<=num-1 ;i++){
    if(num%i==0){
        isPrime=false

    }
}
console.log(isPrime?"prime":"not prime");
