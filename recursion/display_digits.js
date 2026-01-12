// display digits of number

function dispayDigits(n) {
    if (n == 0) {
        return
    }
    console.log(n % 10);

    return dispayDigits(Math.floor(n / 10))

}
dispayDigits(123)

function sumOfDigit(n) {
    if (n == 0) {
        return 0
    }
    return n % 10 + sumOfDigit(Math.floor(n / 10))

}
console.log(sumOfDigit(64));


function sumOfNnumber(n) {
    if (n == 0) {
        return 0
    }
    return n + sumOfNnumber(n - 1)
}
console.log(sumOfNnumber(10));
