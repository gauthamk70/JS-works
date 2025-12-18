
// 6. Find Second Largest Number
// Find the second largest element in an array.

var arr = [1,2,3,4,5,6,4,7,8,6,5,9,8,7]
var largest=0
var secondlargest = 0
for(let n of arr){
    if(n>largest){
        secondlargest=largest
        largest=n
    }
    else if(n<largest && n>secondlargest){
        secondlargest=n
    }

}
console.log("Second largest number: ",secondlargest);
