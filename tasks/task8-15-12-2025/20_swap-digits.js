
// Write a program using for or while loop to swap the first and last digit of a given number.

var num = 700006
var lastDigit = num%10
var  duplicate1=num
var duplicate2=num
var duplicate3 = num
var digitCount=0
while(duplicate1!=0){
    let digit=duplicate1%10
    digitCount++
    

    duplicate1=Math.floor(duplicate1/10)
}
// console.log(digitCount);
var firstDigit=0
while(duplicate2!=0){
    let digit=duplicate2%10
    firstDigit=digit
    duplicate2=Math.floor(duplicate2/10)
}
// console.log(firstDigit);

var middleDigits= Math.floor((duplicate3%(10**(digitCount-1)))/10)
//  console.log(middleDigits);

var swapped= lastDigit*(10**(digitCount-1))+middleDigits*(10**(digitCount-2))+firstDigit
console.log(swapped);





