

function outer (num1){
    function inner (num2){
        return num1+num2
    }
    return inner
}
console.log(outer(100)(200));

function login(username){
    function checkpassword (password){
        return username=="admin" && password=="admin@123"
    
    }
    return checkpassword
}
console.log(login('admin')('admin@123'));
