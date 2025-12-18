
// 4. Reverse an Array
// Reverse an array without using the reverse() method.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var reverse = []
for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i])

}
console.log(reverse);
