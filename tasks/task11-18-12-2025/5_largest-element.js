// Write a JavaScript program to find the largest element in an array.

var arr = [1,2,3,4]
var largest = 0
for(let n of arr){
    if(n>largest){
        largest=n
    }
}
console.log("largest:",largest);
