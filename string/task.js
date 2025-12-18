var phoneNumber="5454131643166312"
// last 4 digit X

var length =phoneNumber.length
var slicedPhoneNumber= phoneNumber.slice(0,length-4)
console.log(slicedPhoneNumber);
console.log(slicedPhoneNumber.padEnd(phoneNumber.length,"X"));


