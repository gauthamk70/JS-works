// Create a new array containing numbers whose square is greater than 200.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var sq = numbers.map(n=>n*n).filter(n=>n>200)

console.log(sq);
