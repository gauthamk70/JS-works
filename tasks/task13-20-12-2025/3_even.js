// 3. Given an array, display only the even numbers from it.

var array = [1, 2, 3, 4, 5, 6]
var evenArray = []
for (let n of array) {
    if (n % 2 == 0) {
        evenArray.push(n)
    }
}
console.log(evenArray);
