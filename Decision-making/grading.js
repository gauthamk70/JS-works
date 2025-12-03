// 3 marks out if 50 
// A:140-150
// B:130-140
// C:120-130
// F:<120

var mark1 = 50
var mark2 = 50
var mark3 = 40

var totalMark = mark1 + mark2 + mark3  // add total marks

if (totalMark >= 140 && totalMark <= 150) {  // true
    console.log("grade A");                  //

}

else if (totalMark >= 130 && totalMark < 140) {
    console.log("grade B");

}
else if (totalMark >= 120 && totalMark < 130) {
    console.log("grade C");

}
else if (totalMark < 120) {
    console.log("Failed");

}
else{
    console.log("invalid input");
    
}