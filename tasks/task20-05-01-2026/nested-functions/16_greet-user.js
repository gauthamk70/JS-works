// JS Nested Function Task: 16_greet-user.js

// Create a function greetUser(name) with a nested function that returns a personalized greeting message.
function greetGautham(name){
    function greetingMsg(msg){
        console.log(msg,name);
        
    }
    return greetingMsg
}
greetGautham('gautham')('goodmorning')