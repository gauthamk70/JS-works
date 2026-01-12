// JS Nested Function Task: 11_outer-inner-variable.js

// Write a program with a nested function where the inner function accesses a variable from the outer function and prints it.
function outer(){
    function inner(){
        console.log('hi');
        
    }
    return inner
}

outer()();
