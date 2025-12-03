var num1 = 2
var num2 = 2
var num3 = 1

if (num1 > num2 && num1 < num3) {
    console.log(num1);

}

else if (num2 > num1 && num2 < num3) {
    console.log(num2);

}
else if (num3 > num2 && num3 < num1) {
    console.log(num3);

}
else if (num1 == num2 && num2 == num3) {
    console.log("all are equal");

}
else if (num1 == num2 && num3 > num1) {
    console.log(num1);

}
else if (num1 == num2 && num3 < num1) {
    console.log(num3);

}
else if (num2 == num3 && num1 > num2) {
    console.log(num2);

}
else if (num2 == num3 && num1 < num2) {
    console.log(num1);

}
else if (num3 == num1 && num2 > num3) {
    console.log(num3);

}
else if (num3 == num1 && num2 < num3) {
    console.log(num2);

}