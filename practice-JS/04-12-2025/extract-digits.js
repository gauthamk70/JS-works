// extract digits of the number

var num = 456

while(num!=0){
    let digit = num%10
    console.log(digit);
    num = Math.floor(num/10)
    
}