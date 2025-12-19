
/*

syntax

variable = (p1,p2,...)=> expression

variable = (p1,p2,...)=>{
    condition
    return
    }
*/


let add = (n1, n2) => n1 + n2
console.log(add(2, 3));

let sub = (n1, n2) => n1 - n2
console.log(sub(5, 8));

let lastDigitMax = (n1, n2) => n1 % 10 > n2 % 10 ? n1 : n2
console.log(lastDigitMax(452, 128));

let lastDigitSum = (n1, n2) => n1 % 10 + n2 % 10
console.log(lastDigitSum(125, 785));

let square = (n) => n ** 2
console.log(square(8));

let maxTwo = (n1, n2) => n1 > n2 ? n1 : n2
console.log(maxTwo(45, 54));

 




