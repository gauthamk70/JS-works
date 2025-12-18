
// 3. Count Even and Odd Numbers
// Given an array of numbers, count how many are even and how many are odd.

var arr = [1,2,3,4,5,6,7,8,9]
var countOdd = 0
var countEven = 0
for(let n of arr){
    n%2==0?countEven++:countOdd++
}
console.log("count of even numbers: ",countEven);
console.log("count of odd numbers: ", countOdd);

