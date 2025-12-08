// perfect number is a positive integer that equals the sum of its proper divisors 
// (all its positive factors excluding the number itself).

var num = 6
var sum = 0

for (let i = 1; i < num; i++) {    //  1   2   3   4   5   6 F (exit loop)
    if (num % i == 0) {            //  T   T   T   F   F
        sum = sum + i              //  1   3   6   6   6
    }
}

console.log(sum == num ? "perfect" : "not perfect");
