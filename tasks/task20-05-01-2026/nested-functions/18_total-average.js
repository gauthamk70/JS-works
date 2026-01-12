// JS Nested Function Task: 18_total-average.js

// Create a nested function to calculate the total and average of an array of numbers.
function totalAndAvg(arr) {
    let total = arr.reduce((s, n) => s + n, 0)
    console.log("total:",total);
    
    function avg() {
         let avg = total/arr.length
         console.log("average:",avg);
         
    }
    return avg
    
}
totalAndAvg([4,5,6])()