// Given two arrays, write a program to merge them into a single array.

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]

var merged = arr1
for (let n of arr2) {
    merged.push(n)
}
console.log(merged);
