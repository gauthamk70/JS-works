// Find the sum of numbers at even index positions.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var sum = numbers.filter((n,i)=>i%2==0).reduce((n1,n2)=>n1+n2)

console.log(sum);
