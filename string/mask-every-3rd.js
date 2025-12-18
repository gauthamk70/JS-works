// replace every 3rd word by "_"
// ABC123XYZ
// 012345678
// 01_45_78_

var str = "ABC123"
var challengecode = "XYZ"

var newStr = str.concat(challengecode)
// console.log(newStr);


var maskedStr = ""
for (let i = 0; i < newStr.length; i++) {
    if ((i + 1) % 3 == 0) {

        maskedStr += "_"
    }
    else{
        maskedStr+=newStr[i]
    }
}
console.log(maskedStr);
