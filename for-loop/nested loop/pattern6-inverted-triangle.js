//4 * * * *  (col4)
//3 * * *    (col3)
//2 * *      (col2)
//1 *        (col1)

// methord 1

// for (let r = 4; r >= 1; r--) {
//     let pattern = ""
//     for (let c = 1; c <= r; c++) {
//         pattern += "* "
//     }
//     console.log(pattern);

// }



// methord 2

for (let r = 1; r <= 4; r++) {
    let pattern = ""
    for (let c = 1; c <= 4; c++) {
        if (r + c <= 5) {
            pattern += "# "
        }
    }
    console.log(pattern);

}
