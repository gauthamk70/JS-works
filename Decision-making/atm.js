// ATM widthdraw in multiple of 100

dbPin = 2121
userPin = 2121

dbBalance = 50000
userWithdraw = 4000

if (dbPin == userPin) {   // True
    if (userWithdraw % 100 == 0) {   // True
        if (userWithdraw <= dbBalance) {    //True
            console.log(`Withdraw succesfull amount:${userWithdraw} available balance:${dbBalance-userWithdraw}`);


        }
        else {
            console.log("Insufficent fund");

        }

    }
    else {
        console.log("Enter multiples of 100");

    }

}
else {
    console.log("incorrect pin");

}