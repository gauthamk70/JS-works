// JS Nested Function Task: 15_square-cube.js

// Write a program using nested functions to find the square and cube of a given number.
function squareAndCube(n){
    console.log('square:',n*n);
    function cube(){
        console.log('cube:',n*n*n);
        

    }
    return cube
    
}
squareAndCube(2)()