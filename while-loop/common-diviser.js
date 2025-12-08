// w.a.p to display all the common divider of 2 num

var num1 = 24
var num2 = 12

var min = 0

if (num1 > num2) {
    min = num2
}
else {
    min = num1
}
var i = 0

while (i <= min) {

    if (num1 % i == 0 && num2 % i == 0) {
        console.log(i);

    }

    i++
}

