// Given an array of numbers, replace negative numbers with zero.

var arr = [1, 0, 1, 1, -5, -4, -1, 1]
var newArr = []

for (let n of arr) {
    if (n < 0) {
        newArr.push(0)
    }
    else {
        newArr.push(n)
    }
}
console.log(newArr);
