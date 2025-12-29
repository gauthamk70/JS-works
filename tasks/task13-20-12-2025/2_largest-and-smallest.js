// Write a program to find the largest and smallest element in an array.
var array = [2,5,4,6,3,1,8,9,2]
var largest = 0
for(let n of array){
    if(n>largest){
        largest=n
    }
}
console.log("largest:",largest);

var smallest = array[0]
for(let n of array){
    if(n<smallest){
        smallest=n
    }
}
console.log("smallest:",smallest);

