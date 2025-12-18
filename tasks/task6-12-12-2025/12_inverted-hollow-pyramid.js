// * * * *
//  *   * 
//   * *
//    *
var n =5
for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c = 1; c <= (n*2-1); c++) {
        if ((r == 1 && c % 2 != 0) || r == c || r + c == (2*n)) {
            pattern += "*"
        }
        else {
            pattern += " "
        }
    }
    console.log(pattern);

}