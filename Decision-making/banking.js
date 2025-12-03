

var dbPin = 2121
var dbBalance = 500

var userPin = 2121
var userWithdraw = 60

if (dbPin == userPin) {       //true
    if (userWithdraw <= dbBalance) {      //false jump to else
        console.log("Withdraw succesfull, amount:", userWithdraw, "Avalable balance:", dbBalance - userWithdraw);

    }
    else {                 //print
        console.log("insufficient balance, Total balace:",dbBalance);

    }
}
else {
    console.log("wrong pin");

}