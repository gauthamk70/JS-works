// Prime numbers are whole numbers greater than 1 divisible only by 1 and themselves

var num = 999
var isPrime = true

for (let i = 2; i < num; i++) {     //2     3

    if (num % i == 0) {             //F     T
        isPrime = false             //      update
        break                       //      break from loop 
    }
}

console.log(isPrime ? "prime number" : "Not a prime number"); 
