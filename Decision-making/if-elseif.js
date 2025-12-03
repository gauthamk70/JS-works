// check if num is positive, negative or Zero

var num = -0.01

if (num > 0) {    // -0.01 > 0 F
    console.log("Positive");

}
else if (num < 0) {  // num<0 T
    console.log(`${num} is negaitive`);

}
else if (num == 0) {  // above condition is true so ignore this statment
    console.log("Zero");

}
else {
    console.log("Invalid input");

}