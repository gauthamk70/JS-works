// factoeial of a num

var num = 0
var fact = 1
var i = 1

while (i <= num) {        //  1   2   3   4   5     6 F(exit)
    fact = fact * i       //  1   2   6   24  120
    i++                  //   2   3   4   5   6
}
console.log("factorial if ", num, "is ", fact);
