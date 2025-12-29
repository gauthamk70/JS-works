var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var target = 7
var left = 0
var right = arr.length - 1

while (left < right) {
    if (arr[left] + arr[right] > target) {
        right--
    }
    else if (arr[left] + arr[right] < target){
        left++
    }
    else if(arr[left] + arr[right] === target){
        console.log(arr[left],"and",arr[right]);
        
        left++
        right--
    }




}