//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *
var n = 4
for (let r = 1; r <= (n * 2) - 1; r++) {
    let pattern = ""
    // top half
    if (r <= n) {
        for (let sp = 1; sp <= n - r; sp++) {
            pattern += " "
        }
        for (let c = 1; c <= r; c++) {
            pattern += "* "
        }
    }
    // bottom half
    else if (r > n) {
        for (let sp = 1; sp <= r - n; sp++) {
            pattern += " "
        }
        for (let c = 1; c <= n * 2 - r; c++) {
            pattern += "* "
        }
    }
    console.log(pattern);

}