//    *
//   * *
//  *   *
// * * * *

var length = 10
for (let r = 1; r <= length; r++) {
    let pattern = ""
    for (let c = 1; c <= length*2-1; c++) {
        if (r + c == length+1 || c - r == length-1 || (r == length && c%2==1)) {
            pattern += "*"
        }
        else {
            pattern += " "
        }
    }
    console.log(pattern);

}