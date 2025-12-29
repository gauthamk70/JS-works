var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

// 1. Create a new array containing the square of each number.
var square = numbers.map(n => n * n)
console.log("Square array:", square);

// 2. Create a new array containing numbers less than 10.
var second = numbers.filter(n => n < 10)
console.log("num less tahn 10:", second);


// 3. Find the average of all numbers.
var total = numbers.reduce((n1, n2) => n1 + n2)
var avg = total / numbers.length
console.log("average", avg);


// 4. Find the smallest number in the array.

var smallest = numbers.reduce((n1, n2) => n1 > n2 ? n2 : n1)
console.log("smallest:", smallest);


// 5. Create a new array containing only odd numbers.

var odd = numbers.filter(n => n % 2 != 0)
console.log("odd:", odd);


// 6. Sort the array and display the third smallest number.

// numbers.sort((n1,n2)=>n1-n2)
console.log("thrid smallest", numbers[2]);


// 7. Create a new array by subtracting 2 from each number.

var newArr = numbers.map(n => n - 2)
console.log("number -2:", newArr);


// 8. Find the sum of only even numbers.

var even = numbers.filter(n => n % 2 == 0)
var sumEven = even.reduce((n1, n2) => n1 + n2)
console.log("sum of even numbers:", sumEven);


// 9. Count how many numbers are greater than the average value.

var count = 0
for (let n of numbers) {
    if (n > avg) {
        count++
    }
}
console.log("numbers are greater than the average value:", count);


// 10. Create a new array containing numbers divisible by 5.
var newArr10 = numbers.filter(n => n % 5 == 0)
console.log("numbers divisible ny 5:", newArr10);


// 11. Sort the array based on descending order and display the first element.
// numbers.sort((n1,n2)=>n2-n1)
console.log(numbers[0]);


// 12. Create a new array by converting each number to a string.

var string = numbers.map(n => n.toString())
console.log("string array:", string);


// 13. Find the difference between the maximum and minimum values.

var Max = numbers.reduce((n1, n2) => n1 > n2 ? n1 : n2)
var min = numbers.reduce((n1, n2) => n1 > n2 ? n2 : n1)
console.log("max - min :", Max - min);


// 14. Create a new array by multiplying each number by its index value.

var newArr14 = numbers.map((n, index) => n * index)
console.log(newArr14);


// 15. Check whether all numbers are greater than 5.
var gt5 = true
for (let n of numbers) {
    if (!n > 5) {
        gt5 = false
        break

    }
}
console.log(gt5 ? "all numbers are greater than 5" : "all numbers are NOT greater than 5");
