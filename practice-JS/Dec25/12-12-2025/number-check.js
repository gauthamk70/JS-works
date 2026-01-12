function numberCheck(num){
    if(num>0){
        return "+ve"
    }
    else if (num<0){
        return "-ve"
    }
    else if (num==0){
        return "zero"
    }
    else{
        return "invalid input"
    }
}

console.log(numberCheck(2));
console.log(numberCheck(0));
console.log(numberCheck(-6));
console.log(numberCheck("k"));
