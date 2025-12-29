// Write a program to reverse an array without using built-in reverse methods.

var array = [5, 4, 3, 2, 1]
var reversed = []
for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i])
}
console.log(reversed);
