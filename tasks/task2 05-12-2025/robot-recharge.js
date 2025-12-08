// A robot starts with 0% battery.
// Keep adding 20% per loop and print "Charging... battery at X%"
// Stop when battery reaches 100% and print "Fully charged!"

var percent = 0
while(percent<100){
    percent=percent+20
    console.log("charging.. battery at",percent,"%");
    
}
console.log("fully charged!");
