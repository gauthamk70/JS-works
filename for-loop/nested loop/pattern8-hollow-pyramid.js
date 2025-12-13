//     *
//    * *    
//   *   *
//  *     *
// * * * * *   

// refer note 
for (let r = 1; r <= 5; r++) {
    let pattern = ""
    for (let c = 1; c <= 9; c++) {
        if (r + c == 6 || c - r == 4 || (r == 5 && c % 2 != 0)) {
            pattern += "*"
        }
        else {
            pattern += " "
        }
    }
    console.log(pattern);
    

}