// Given an array of numbers, check whether all elements are unique.

var arr = [1,2,3,4,5]
var newArr =[]
for(let n of arr){
    if(!newArr.includes(n)){
        newArr.push(n)
    }
}
console.log(newArr.length==arr.length?"all unique":"not unique");
