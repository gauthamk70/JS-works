// login system with password and otp

var dbPassword = 123456
var dbOtp = 4444

var userPassword = 123
var userOtp = 4444

if(dbPassword==userPassword){   // password is not same so jump to else 
    if(dbOtp==userOtp){
        console.log("login succesfull");
        
    }
    else{
        console.log("incorrect OTP");
        
    }
}
else{
    console.log("invalid password");
    
}