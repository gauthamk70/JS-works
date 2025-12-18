//       *
//     * *
//   * * * 
// * * * *

for(let r=1; r<=4; r++){
    let pattern=""
    for(let c=1; c<=4;c++){
        if(r+c>=5){
            pattern+="* "
        }
        else{
            pattern+="  "
        }
    }
    console.log(pattern);
    
}