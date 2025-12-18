// * * * *
//  * * * *
//   * * * *
//    * * * *
var n=4
for(let r=1; r<=n; r++){
    let pattern=""
    for(let sp=0; sp<=r-1; sp++ ){
        pattern+=" "}
    for(let c=1; c<=n; c++){
        pattern+="* "
    }
    console.log(pattern);
    
}