// 5. Hollow Box With 1s

// For n = 5:

// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1

var n = 5
for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c = 1; c <= n; c++) {
        r == 1 || r == n || c == 1 || c == n ? pattern += "1 " : pattern += "0 "
    }
    console.log(pattern);

}
