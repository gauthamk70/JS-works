// w.a.p. for sum of cube of each digit

var num = 153
var sum = 0

while (num != 0) {
    let digit = num % 10
    digit=digit**3
    sum=sum+digit

    num = Math.floor(num / 10)

}
console.log(sum);
