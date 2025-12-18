
// 10. Move Zeros to End
// Move all zero values to the end of the array while maintaining the order of other elements.
// Example: [1,0,2,0,3] → [1,2,3,0,0]

var arr = [1, 0, 2, 3, 0, 4, 0]
var newArr = []
var zeroCount = 0
for (let n of arr) {
    if (n == 0) {
        zeroCount++

    }
    else {
        newArr.push(n)
    }
}

while (zeroCount > 0) {
    newArr.push(0)
    zeroCount--
}

console.log(newArr);

