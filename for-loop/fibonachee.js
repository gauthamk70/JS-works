// Fibonacci numbers form a sequence starting with 0 and 1,
//  where each subsequent number is the sum of the two preceding ones

var limit = 10

var previous = 0
var current = 1

console.log(previous);                    // 0   
console.log(current);                     // 1 


for (let i = 3; i <= limit; i++) {        // 3    4    5    6
    let next = previous + current         // 1    2    3
    previous = current                    // 1    1    2
    current = next                        // 1    2    3 
    console.log(next);                    // 1    2    3 

}