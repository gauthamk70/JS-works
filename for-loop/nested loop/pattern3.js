// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1

for (let r = 1; r <= 4; r++) {
    let pattern = ""
    for (let c = 1; c <= 4; c++) {
        if (r == c) {
            pattern += 1
        }
        else { pattern += 0 }
    }
    console.log(pattern);

}