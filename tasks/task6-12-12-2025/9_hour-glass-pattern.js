// * * * *
//  * * *
//   * *
//    *
//   * *
//  * * *
// * * * *
var n = 5
for (let r = 1; r <= (n * 2 - 1); r++) {
    let pattern = ""
    if (r <= n) {
        for (let sp = 1; sp <= r - 1; sp++) {
            pattern += " "
        }
        for (let c = 1; c <= (n + 1) - r; c++)
            pattern += "* "
    }
    else {
        for (let sp = 1; sp <= (n * 2 - 1) - r; sp++) {
            pattern += " "
        }
        for (let c = 1; c <= r - (n - 1); c++) {
            pattern += "* "
        }
    }
    console.log(pattern);

}