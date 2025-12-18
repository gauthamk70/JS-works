
// Write a JavaScript program using a for loop to check whether a number is a prime number.


function isPrime(num) {
    var prime = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false
            break
        }
    }
    return prime
}
console.log(isPrime(17));
