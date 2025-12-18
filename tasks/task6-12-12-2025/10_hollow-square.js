// * * * *
// *     *
// *     *
// * * * *
var n = 5
for(let c=1; c<=n; c++){
    let pattern=""
    for(let r=1; r<=n; r++){
        if(r==1||r==n||c==1||c==n){
            pattern+="* "
        }
        else{
            pattern+="  "
        }
    }
    console.log(pattern);
    
}