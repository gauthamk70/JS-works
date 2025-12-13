
// ⿢ Write a function that returns the largest of three numbers.
// Input: 10, 25, 15 → Output: 25

function largest(num1,num2,num3){
    if(num1>num2&& num1>num3){
        return num1
    }
    else if(num2>num1 && num2> num3){
        return num2
    }
    else if(num3>num1 && num3>num2){
        return num3
    }
    else if(num1==num2 && num2==num3){
        return "all are equal"
    }
    else{
        return "invalid"
    }
}

console.log(largest(10,25,15));
