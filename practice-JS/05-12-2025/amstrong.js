var num = 153
var numCopy = num
var orgiginal = num
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



console.log(orgiginal == sum ? "Amstrong number" : "Not amstrong number");

