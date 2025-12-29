// Write a program to count how many times a specific element appears in an array

var array = [1, 5, 6, 8, 5, 6, 2, 1, 4, 8, 5, 2, 6, 9, 3, 1, 7]
var element = 5
var elementCount = 0
for (let n of array) {
    if (n == element)
        elementCount++
}
console.log(`${element} appers ${elementCount} times in the array`);
