// two pair sum

var arr = [1, 2, 3, 4, 5, 6]
var target = 9

var left = 0
var right = arr.length - 1

while (left < right) {
    let currentSum = arr[left] + arr[right]
    
    if (currentSum == target) {
        console.log(arr[left], "and", arr[right]);
        right--
        left++
    }
    else if (currentSum > target) {
        right--
    }
    else if (currentSum < target) {
        left++
    }
}


// wrong approch too much itration
// for (let i = 0; i <= arr.length - 1; i++) {
//     let n1 = arr[i]
//     for (let j = 0; j <= arr.length - 1; j++) {
//         let n2 = arr[j]
//         if (n1 + n2 == target) {
//             console.log(n1, n2);

//         }
//     }
// }