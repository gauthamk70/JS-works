// sum of num 1-3

var limit = 3  // limit  = 3
var sum = 0   // sum = 0
var i = 1    //i=1

while (i <= limit) {  //1<=3 T  2<=3 T  3<=3 T  4<=3 F(exitloop)
    sum = sum + i   //sum=0+1=1  sum=1+2=3  sum=3+3=6
    i++    //2  3  4
}
console.log(sum); //print latest sum which is 6
