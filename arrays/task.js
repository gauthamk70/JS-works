
// minNumber
// maxNumber
// sum of numbers
// sum of odd numbers
// sum of even numbers
// diviors of 3
// avg of numbers
// most frequent number

var numbers=[2,3,4,5,6,7,7,8,3,9,9,7]

// min number
var min= numbers[0]
for(let n of numbers){
    if(min>n){
        min=n
    }
}
console.log("min number:",min);

// max number
var max=0
for(let n of numbers){
    if(n>max){
        max=n
    }
}
console.log("maximum num:",max);

// sum of numbers
var sum=0
for(let n of numbers){
    sum+=n
}
console.log("sum of numbers:",sum);

// sum of odd numbers
var sumOdd=0
for(let n of numbers){
    if(n%2!=0){
        sumOdd+=n
    }
}
console.log("sum of odd numbers: ",sumOdd);

// sum of even numbers
var sumEven = 0
for(let n of numbers){
    if(n%2==0){
        sumEven+=n
    }
}
console.log("sum of even numbers: ",sumEven);

// diviser of 3
var divserOfThree = []
for(let n of numbers){
    if(n%3==0){
        divserOfThree+=n+", "
    }
}
console.log("diviser of three:",divserOfThree);

// average of numbers
var sumOfnumbers=0
var count=0
for(let n of numbers){
    count++
    sumOfnumbers+=n
}
console.log("average of numbers:",sumOfnumbers/count);

// most frequent number







