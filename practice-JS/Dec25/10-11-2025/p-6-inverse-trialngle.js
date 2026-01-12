// * * * *
// * * * 
// * * 
// * 
var length = 7
for (let r = 1; r <= length; r++) {
    let pattern = ""
    for (let c = 1; c <= length; c++) {
        if (r <= c) {
            pattern += "* "
        }
    }
    console.log(pattern);

}