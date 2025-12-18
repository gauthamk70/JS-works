// *
// * *
// * * *
// * * * *
var n = 4
for(let r=1; r<=n; r++){
    let pattern=""
    for(let c=1; c<=n;c++){
        r>=c?pattern+="* ":pattern+=""
    }
    console.log(pattern);
    
}