// Find the total sum after removing numbers less than 10.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var newArr = numbers.filter(n=>n>=10).reduce((sum,n)=>sum+n)
console.log(newArr);
