// Count how many numbers are less than the average value.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];
var total = numbers.reduce((sum,n)=>sum+n,0)
// console.log(total);
var avg = total/numbers.length
// console.log(avg);

var lessAvg = numbers.filter(n=>n<avg).length
console.log(lessAvg);


