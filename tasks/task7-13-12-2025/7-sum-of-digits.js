// ⿧ Create a function that returns the sum of digits of a number.
// Input: 1234 → Output: 10

function sumOfDigits(num){
    let numDuplicate = num
    let sum =0
    
    while(numDuplicate!=0){
      let digit = numDuplicate%10
      sum+=digit

     numDuplicate=Math.floor(numDuplicate/10)   
     
    }
    return sum
}

console.log(sumOfDigits(11114));

