// check if the number is positive/negative/zero and also odd/even

var num = 6

if(num>0){

    if(num%2==0){
        console.log("positive and even");
        
    }
    else{
        console.log("poitive and odd");
        
    }
    
    
}

else if(num<0){
    if(num%2==0){
        console.log("negative and even");
        
    }
    else{
        console.log("negative and odd");
        
    }
    
}
else if(num==0){
    console.log("zero and even");
    
}
else{
    console.log("invalid");
    
}