var numbers = [1,2,3,4,5,8,56,4,1]

// highest num
var highest = numbers.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);

// lowest num 
var lowest = numbers.reduce((n1,n2)=>n1>n2?n2:n1)
console.log(lowest);

// total sum

var total = numbers.reduce((n1,n2)=>n1+n2)
console.log(total);


