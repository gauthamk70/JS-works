// find the least positive missing numbers from a sorted array

var arr = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 13]
// 1 2 3 4 5 6 7 8 9 10 11
// 0 1 2 3 4 5 6 7 8  9 10
var left = 0
var right = 1

while (left <= arr.length - 2) {
    if ((arr[right] - arr[left]) > 1) {
        console.log(arr[left]+1);
        break

    }

    left++
    right++
}