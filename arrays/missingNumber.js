var arr = [1, 2, 4, 8, 9]
//         0 1 2 3 4 5
// find the least positive  missing numbers

var left = 0
var right = 1

for (let left = 0; left < arr.length - 1; left++) {  //better to do with while loop
    let difference = arr[right] - arr[left]
    if (difference != 1) {
        console.log(arr[left] + 1, " is least +ve missing number");
        break

    }
    
    right++
}
