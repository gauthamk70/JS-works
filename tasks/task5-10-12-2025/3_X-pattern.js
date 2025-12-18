
// 3. X-Pattern with 1s

// For n = 5:

// 1   0   0   0   1
// 0   1   0   1   0
// 0   0   1   0   0
// 0   1   0   1   0
// 1   0   0   0   1
var n = 5
for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c = 1; c <= n; c++) {
        if (r == c || c + r == n + 1) {
            pattern += "1 "
        }
        else {
            pattern += "0 "
        }
    }
    console.log(pattern);

}
