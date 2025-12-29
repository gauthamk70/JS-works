// Write a program to find the index of an element without using built-in index methods.

var arr = [10, 20, 30, 40, 30]
var element = 30

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == element) {
        console.log(i);

    }
}