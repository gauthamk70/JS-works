
// 2. Largest and Smallest Element
// Find the largest and smallest number in an array using a loop.

var arr = [5,9,8,1,2,6,7,4,3,2]
var largestNum = 0
var smallestNum = arr[0]
for(let n of arr){
    if(n>largestNum){
        largestNum=n
    }
}

for(let n of arr){
    if(n<smallestNum){
        smallestNum=n
    }
}

console.log("Largest number: ",largestNum);
console.log("Smallest number: ",smallestNum);

