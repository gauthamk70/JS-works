// * * * *
// * * *
// * *
// *
var n = 7
for(let r=1; r<=n; r++){
    let pattern=""
    for(let c=1; c<=n;c++){
        if(r+c<=n+1){
            pattern+="* "
        }
    }
    console.log(pattern);
    
}