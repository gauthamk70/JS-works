function isPrime(num) {
    let prime = true
    for (let i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            prime = false
            break
        }
    }
    return prime
}

console.log(isPrime(7));
console.log(isPrime(15));
console.log(isPrime(5));
console.log(isPrime(17));
