// 2. Print:

// R R R R
// R S S R
// R S S R
// R R R R
var length = 4
for (let r = 1; r <= length; r++) {
    let pattern = ""
    for (let c = 1; c <= length; c++) {
        if (r == 1 || r == length || c == 1 || c == length) {
            pattern += "R "
        }
        else { pattern += "S " }
    }
    console.log(pattern);

}
