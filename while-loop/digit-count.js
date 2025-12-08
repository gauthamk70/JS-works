var num = 1254

var count = 0

while (num != 0) {                   //1254    125   12   1    0  F (exit)
    count++                          //  1      2    3    4
    num = Math.floor(num / 10)       // 125     12    1   0
}
console.log(count);
