// JS Recursion Task: 8_sum-of-array.js
// Write a recursive function to find the sum of elements in an array.
function sum_of_elements(arr) {
    if (arr.length == 0) return 0
    return sum_of_elements(arr.slice(1)) + arr[0]
}
console.log(sum_of_elements([2, 2]));
