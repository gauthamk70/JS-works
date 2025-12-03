var cibilScore = 120

if (cibilScore >= 300 && cibilScore < 580) {  //false skip
    console.log("poor");

}

else if (cibilScore >= 580 && cibilScore < 670) {  //false skip
    console.log("fair");

}

else if (cibilScore >= 670 && cibilScore < 740) {  //false skip
    console.log("good");

}
else if (cibilScore >= 740 && cibilScore < 800) {  //false skip
    console.log("very good");

}
else if (cibilScore >= 800 && cibilScore <= 850) {  //false skip
    console.log("excellent");

}
else{
    console.log("give a value between 300 and 850 ");   //print
    
}