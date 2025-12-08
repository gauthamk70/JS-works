var num = 8208
var numCopy = num
var numCopy2 = num

var count = 0
sum = 0

while (num != 0) {
    count++

    num = Math.floor(num / 10)
}


while (numCopy != 0) {
    let digit = numCopy % 10
    let exp = digit ** count
    sum = sum + exp
    numCopy = Math.floor(numCopy / 10)
}


// if(numCopy2==sum){
//     console.log("armstrong number");

// }
// else{
//     console.log("not armstrong number");

// }

console.log(numCopy2 == sum ? "Armstrog number" : "not armstrong number");


