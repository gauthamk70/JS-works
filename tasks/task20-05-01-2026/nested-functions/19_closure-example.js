// JS Nested Function Task: 19_closure-example.js

// Write a program using nested functions where the inner function is returned and called later (closure concept).

function createGreeting(name) {
    function greet() {
        return "Hello, " + name;
    }

    return greet; // inner function returned
}

const greetUser = createGreeting("Gautham");
console.log(greetUser()); // Hello, Gautham
