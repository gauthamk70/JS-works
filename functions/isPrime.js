// function to check if num is prime  return (T/F)

function isPrime(num) {
    let primeNumber = true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primeNumber = false
            break
        }

    }
    return primeNumber
}

console.log(isPrime(6));
console.log(isPrime(9));
console.log(isPrime(7));
console.log(isPrime(15));
