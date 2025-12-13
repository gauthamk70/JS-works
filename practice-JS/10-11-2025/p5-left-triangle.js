// *
// * *
// * * *
// * * * *

var length = 7

for(let r=1; r<=length; r++){
    let pattern = ""
    for(let c=1; c<=length; c++){
        if(c<=r){
            pattern+="* "
        }
    }
    console.log(pattern);
    
}