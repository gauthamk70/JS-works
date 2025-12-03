/*
w.a.p to display
PING if num / 3
PONG if num / 5
PINGPONG if num / 15
Invalid other vise

*/

var num = 4

if (num % 15 == 0) {    // 4 % 15 == 0 F
    console.log("PINGPONG");

}
else if (num % 5 == 0) {  //4 % 5 == 0 F
    console.log("PONG");

}
else if (num % 3 == 0) {  //4 % 3 == 0 F 
    console.log("PING");

}
else {            //Print this statement
    console.log("invalid"); 

}
