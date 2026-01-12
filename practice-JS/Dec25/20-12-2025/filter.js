var numbers = [1,2,5,4,15,87,2,4,6,21]

// num>10

var numGtTen = numbers.filter(n=>n>10)
console.log(numGtTen);

// even numbers

var evenNumbers = numbers.filter(n=>n%2==0)
console.log(evenNumbers);

// odd

var oddNumbers = numbers.filter(n=>n%2!=0)
console.log(oddNumbers);


