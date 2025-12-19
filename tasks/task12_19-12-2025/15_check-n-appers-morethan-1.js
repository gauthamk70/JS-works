// Given the array [1, 3, 5, 3, 7, 3], check whether the number 3 appears more than once.

var arr = [1, 3, 5, 3, 7, 3]
var count = 0
for (let n of arr) {
    if (n == 3) {
        count++
    }
}

console.log(count > 1 ? "3 appears more than once" : "3 does not appears more than once");
