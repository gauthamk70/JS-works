// 2. Create a new array containing numbers greater than the median value of the array.
var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

numbers.sort((n1, n2) => n1 - n2)
var length = numbers.length
var medianIndex = 0
var median = 0

if (length % 2 != 0) {
    medianIndex = Math.floor(length / 2)
    median = numbers[medianIndex]

}
else {
    medianIndex = Math.floor(length / 2) - 1
    median = ((numbers[medianIndex]) + (numbers[medianIndex + 1])) / 2
}
console.log(median);



var newarr = numbers.filter(n => n > median)
console.log(newarr);



