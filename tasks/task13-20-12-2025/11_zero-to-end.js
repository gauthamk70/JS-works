// Given an array, shift all zero values to the end without changing the order of other elements.

var arr = [0,1,2,0,4,0,5,0,6,0,0]
var newArr = []
for(let n of arr){
    if(n!=0){
        newArr.push(n)
    }
}
for(let n of arr){
    if(n==0){
        newArr.push(n)
    }
}
console.log(newArr);

