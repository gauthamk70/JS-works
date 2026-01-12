function username(name){
    function greeinings(message){
        
        return `hello ${name}, ${message}`.toUpperCase()
        
    }
    return greeinings
}

console.log(username('vipin')('goodmorning'));
