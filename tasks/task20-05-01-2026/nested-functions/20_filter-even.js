// JS Nested Function Task: 20_filter-even.js

// Write a nested function example to filter even numbers from an array using an inner function.
function filterEven(arr){
    function isEven(num){
        return num%2==0
    }
    return arr.filter(isEven)


}
console.log(filterEven([1,2,3,4]));
