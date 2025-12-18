//    *
//   * *
//  * * *
// * * * *

var n = 5
for(let r=1; r<=n; r++){
    let pattern=""
    for(let sp=1; sp<=n-r; sp++){
        pattern+=" "
    }
    for(let c=1; c<=r; c++){
        pattern+="* "
    }
    console.log(pattern);
    
}