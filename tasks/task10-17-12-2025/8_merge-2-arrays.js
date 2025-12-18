// 8. Merge Two Arrays
// Merge two arrays into a single array without using concat().

var arr1 = ["hello", "everyone"]
var arr2 = ["good", "morning"]

var arrMerged = []
for (let w of arr1) {
    arrMerged.push(w)
}
for (let w of arr2) {
    arrMerged.push(w)
}
console.log(arrMerged);
