// display the largest number between 3 numbers

var num1 = 4
var num2 = 4
var num3 = 4

if (num1>num2 && num1>num3){  // 4>4 && 4>4  F
    console.log(`${num1} is largest`);
    
}

else if (num2>num1 && num2>num3){  //4>4 && 4>4 F
    console.log(`${num2} is largest`);
    
}
else if (num3>num1 && num3>num2){  //4>4 && 4>4 F
    console.log(`${num3} is largest`);
    
}
else if (num1==num2 && num2==num3){   //4==4 & 4==4 T
    console.log("all number are equal");
    
}
else{
    console.log("invalid");
    
}
