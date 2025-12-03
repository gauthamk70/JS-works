var year = 2000

if ((year % 100 == 0 && year % 400 == 0)    // check if century year is leap year
    ||                                      // or 
    (year % 100 != 0 && year % 4 == 0)) {  // check if non century year is leap uear
    console.log("leap year");

}
else {
    console.log("not a leap year");

}