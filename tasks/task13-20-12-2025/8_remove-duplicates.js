
// 8. Write a program to remove duplicate elements from an array.

var arr = [5, 4, 3, 2, 2, 1]

var newArr = []
for (let n of arr) {
    if (!newArr.includes(n)) {
        newArr.push(n)
    }
}
console.log(newArr);
