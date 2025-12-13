// cube of function

function cube(num){
    return num**3
}

console.log(cube(2));

// create a function isOdd with one parameter num and return true if num is odd

function isOdd(num){
    if(num%2==1){
        return true
    }
    else{
        return false
    }
}
console.log(isOdd(3));

// create a numberCheck with one parameter num and return
// +ve if num is positive
// -ve if num is negtive
// 0 if num is zero 

function numberCheck(num){
    if(num>0){
        return "+ve"
    }
    else if(num<0){
        return "-ve"
    }
    else{
        return "0"
    }
}

console.log(numberCheck(5));
