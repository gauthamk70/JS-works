// * * * * *
//   * * * *
//     * * *
//       * *
//         *

var n = 4
for(let r=1; r<=n; r++){
    let pattern=""
    for(let c=1; c<=n; c++){
        if(c>=r){
            pattern+="* "
        }
        else{
            pattern+="  "
        }
    }
    console.log(pattern);
    
}