
var num1 = 5
var num2 = 10
var gcd = 1

var minNum = num1 > num2 ? num2 : num1       // 5

for (let i = 1; i <= minNum; i++) {          // 1  2  3  4  5  6 F(exit) 
    if (num1 % i == 0 && num2 % i == 0) {    // T  T  T  F  T
        gcd = i                              // 1  2  3  3  5

    }
}
console.log(gcd);
