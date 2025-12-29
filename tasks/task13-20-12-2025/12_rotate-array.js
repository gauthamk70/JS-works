// Write a program to rotate an array to the right by 1 position.
var arr = [2,3,1]
var rotated = []
rotated.push(arr[arr.length-1])
var left = 0


while(left<=arr.length-2){
    rotated.push(arr[left])


    left++
   
}
console.log(rotated);
