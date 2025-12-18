
// Write a JavaScript program using a for loop to print numbers from 1 to N, skipping multiples of 3.


function custom(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 != 0) {
            console.log(i);
        }
    }
}

custom(20)
