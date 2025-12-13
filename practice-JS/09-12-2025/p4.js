// 1 0 0 1
// 0 1 1 0
// 0 1 1 0
// 1 0 0 1

var squareLength = 3

for (let r = 1; r <= squareLength; r++) {
    let pattern = ""
    for (let c = 1; c <= squareLength; c++) {
        if (r == c || r + c == squareLength + 1) {
            pattern += "1 "
        }
        else {
            pattern += "0 "
        }
    }
    console.log(pattern);

}