db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}

//1 create a function for validate account number. To validate account check
//if account number in db return true otherwise return false
function validateAcNo(acno){
    return acno in db ? true:false  
}
// console.log(validateAcNo(1000));


//2 create a function for authenticate user using account number and password 
//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied
function authenticated(acno,pswd){
    if(validateAcNo(acno)){
        actualpassword = db[acno].password
        if(pswd==actualpassword){
            return "access granded"
        }
        else{

         return "invalid password"
        }
    }
    else {
        return 'invalid acno'
    }
}
console.log(authenticated(1000,1000));
