//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for (let row = 1; row <= 5; row++) {

    let pattern = ""
    // loop for space
    for (let sp = 1; sp <= 5 - row; sp++) {
        pattern += " "

    }

    // loop for *
    for (let c = 1; c <= row; c++) {
        pattern += "* "
    }
    console.log(pattern);

}