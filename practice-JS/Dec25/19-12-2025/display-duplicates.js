// display duplicate values from sorted array

var numbers = [1,2,3,3,4,5,6,6,7] 

var left = 0
var right = 1

while(left<=numbers.length-2){

    if(numbers[right]-numbers[left]==0){
        console.log(numbers[left]);
        
    }
    left++
    right++
}