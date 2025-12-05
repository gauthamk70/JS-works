// w.a.p. to display sum of even numbers upto limit

var limit = 5 
var sum = 0
var i = 1

while (i <= limit) {  //i = 1  2  3  4  5  6F(exit loop)
    if (i % 2 == 0) { //    f  T  f  t  f
       sum = sum + i //sum     2     6  
    }

    i++               //    2  3  4  5  6  
}
console.log(sum);
