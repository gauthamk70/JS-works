// JS Nested Function Task: 17_password-validator.js

function validation(password) {
    function checkSpecialChar() {
        const specialChars = ["!", "@", "#", "$"];
        return specialChars.some(char => password.includes(char));
    }

    if (password.length <= 5) {
        console.log("Minimum 6 characters required");
        return;
    }

    if (checkSpecialChar()) {
        console.log("Password accepted");
    } else {
        console.log("Please enter at least one special character (!, @, #, $)");
    }
}


validation("abc@12");
