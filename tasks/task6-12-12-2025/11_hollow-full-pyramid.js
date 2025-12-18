//    *
//   * *
//  *   *
// * * * *
var n =5
for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c = 1; c <= (n*2-1); c++) {
        if ((r == n && c % 2 != 0) || r+c==(n+1) || c-r==(n-1)){
            pattern+="*"
        }
        else{
            pattern+=" "
        }
    }
    console.log(pattern);
    
}