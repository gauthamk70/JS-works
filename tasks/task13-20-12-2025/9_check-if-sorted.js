// Given an array of numbers, check whether the array is sorted in ascending order.

var arr = [1,2,1]
var left = 0
var right = 1
var ascending = true
while(left<=arr.length-2){
    if(arr[right]-arr[left]<0){
        ascending=false
        break        
    }
    left++
    right++
}

console.log(ascending?"ascending order":"not ascending order");
