// Write a program to find the smallest element in an array.

var arr = [1, 2, 3, 4, 5]
var smallest = arr[0]
for (let n of arr) {
    if (n < smallest) {
        smallest = n
    }

}
console.log("smallest: ", smallest);
