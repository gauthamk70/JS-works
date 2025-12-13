// *
// **
// ***
// ****

// methord 1

// for (let r = 1; r <= 4; r++) {
//     let pattern = ""
//     for (let c = 1; c <= r; c++) {
//         pattern += "* "


//     }
//     console.log(pattern);

// }



//  methord 2

for (let r = 1; r <= 4; r++) {
    let result = ""
    for (let c = 1; c <= 4; c++) {
        if (c <= r) {
            result += "* "
        }
    }
    console.log(result);   
}