// Find the maximum value after sorting the array.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];
var max = numbers.sort((n1, n2) => n1 - n2).reduce((n1, n2) => n1 > n2 ? n1 : n2)
console.log(max);



