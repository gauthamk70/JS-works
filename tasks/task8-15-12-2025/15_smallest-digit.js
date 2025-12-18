// Write a JavaScript program using a while loop to find the smallest digit in a given number.

function smallestDigit(num) {
    var smallest = 9
    while (num != 0) {
        let digit = num % 10
        if (digit < smallest) {
            smallest = digit
        }
        num = Math.floor(num / 10)
    }
return smallest
}

console.log(smallestDigit(54202648));

