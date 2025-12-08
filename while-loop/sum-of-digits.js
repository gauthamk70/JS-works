// w.a.p to show sum of digit

var num = 456
var sum = 0
while (num != 0) {                //  456    45     4       0 F (exit)
    let digit = num % 10          //   6      5     4

    sum = sum + digit             //   6      11    15
    num = Math.floor(num / 10)    //   45      4     0

}
console.log("sum of digits is:", sum);
