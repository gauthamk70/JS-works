// JS Nested Function Task: 13_function-scope.js

// Write a nested function example to demonstrate function scope in JavaScript.
function outer(){
    console.log('from outer');
    function inner(){
        console.log('from inner');
        

    }
   return inner()
    
}
outer()