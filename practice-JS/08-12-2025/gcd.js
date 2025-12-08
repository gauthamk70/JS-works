var num1 = 12
var num2 = 24
var gcd = 0

var min = 0
num1 > num2 ? min = num2 : min = num1

for (let i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i
    }
}
console.log(gcd);
