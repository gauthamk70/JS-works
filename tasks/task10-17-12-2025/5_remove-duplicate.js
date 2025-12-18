
// 5. Remove Duplicate Elements
// Write a program to remove duplicate values from an array.

var arr = [1,1,2,2,2,3,3,4,5,6,7,7,7,8,8,9,9,9,9]
var newArr= []
for(let ch of arr){
    if(!newArr.includes(ch)){
        newArr.push(ch)
    }
    
}
console.log(newArr);
