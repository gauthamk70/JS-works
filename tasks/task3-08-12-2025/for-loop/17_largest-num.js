// 17. Find the largest number in an array

// Given an array:
// let nums = [12, 5, 9, 45, 22];
// Use a for loop to find the maximum number.

 var array = [12,5,9,45,22]
 var largest = array[0]

 for(let i = 0 ; i<array.length ;i++){
    if(array[i]>largest){
        largest=array[i]

    }
   
 }
 console.log(largest);
 
