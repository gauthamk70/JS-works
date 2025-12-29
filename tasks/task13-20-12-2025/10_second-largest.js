// Write a program to find the second largest number in an array.
var arr = [1, 2, 3, 4, 5, 6]
var largest = -Infinity
var secondLargest = -Infinity
for (let n of arr) {
    if (n > largest) {
        secondLargest = largest
        largest = n

    }
    else if (n > secondLargest && n < largest) {
        secondLargest = n
    }
}
console.log(secondLargest);
