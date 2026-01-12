// JS Nested Function Task: 14_counter.js

// Create a function counter() using a nested function that
//  increments and returns a count each time it is called.

function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

