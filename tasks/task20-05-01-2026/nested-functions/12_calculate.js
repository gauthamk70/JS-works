// JS Nested Function Task: 12_calculate.js
// Create a function calculate() that contains nested functions for addition, subtraction, and multiplication, and returns the result based on user choice.
function calculate(choice){
    function add(n1,n2){
        return n1+n2
    }
    function sub(n1,n2){
        return n1-n2
    }
    function mul(n1,n2){
        return n1*n2
    }
    if(choice=='add') return add
    if(choice=='sub')return sub
    if(choice=='mul')return mul
}
console.log(calculate('add')(2,3));
console.log(calculate('sub')(2,3));
