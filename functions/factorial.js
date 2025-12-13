// create a function factorial and return the factorial of num

function factorial(num) {
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact = fact * i
    }
    return fact
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(10));
