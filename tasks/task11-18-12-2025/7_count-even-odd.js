//  Write a JavaScript program to count even and odd numbers in an array.

var arr = [1,2,3,4,5,6]
var countEven = 0
var countOdd = 0

for(let n of arr){
    n%2==0?countEven++:countOdd++
}
console.log("even count: ",countEven);
console.log("odd count: ",countOdd);
