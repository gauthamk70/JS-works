// 4. Triangular 1s Pattern
// 1 0 0 0
// 1 1 0 0
// 1 1 1 0
// 1 1 1 1
var n = 4
for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c = 1; c <= n; c++) {
        r >= c ? pattern += "1 " : pattern += "0 "
    }
    console.log(pattern);

}