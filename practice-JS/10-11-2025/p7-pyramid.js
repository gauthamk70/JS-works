//    *
//   * *
//  * * *
// * * * *

var length = 8
for (let r = 1; r <= length; r++) {
    let pattern = ""
    // loop for space
    for (let sp = 1; sp <= length - r; sp++) {
        pattern += " "
    }
    // loop for *
    for (let c = 1; c <= r; c++) {
        pattern += "* "
    }
    console.log(pattern);

}