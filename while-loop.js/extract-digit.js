// print digit of num

var num = 425

while (num != 0) {            //425    42   4    0(exit)
    let digit = num % 10      //5       2   4
    console.log(digit);       //5       2   4
    num = Math.floor(num / 10)//42      4   0

}