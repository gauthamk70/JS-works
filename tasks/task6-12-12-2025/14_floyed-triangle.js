// 1
// 2 3
// 4 5 6
// 7 8 9 10
var n=8 
var num = 1
for (let r = 1; r <= n; r++) {
    let pattern = ""
    for (let c = 1; c <= r; c++) {
        pattern += num + " "
        num++
    }
    console.log(pattern);

}
