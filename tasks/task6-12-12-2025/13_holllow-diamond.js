//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *
var n=7
for(let r=1; r<=(n*2-1); r++){
    let pattern=""
    for(let c=1; c<=(n*2-1); c++){
        if(r+c==(n+1)||c-r==(n-1)||r+c==(3*n-1)||c-r==-(n-1)){
            pattern+="*"
        }
        else{
            pattern+=" "
        }
    }
    console.log(pattern);
    
}