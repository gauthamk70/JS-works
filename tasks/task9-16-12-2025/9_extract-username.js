
//  Write a JavaScript program to extract the username from an email ID.
// Example: user@gmail.com → user

function userExtract(email){ 
    return email.replace("@gmail.com","")
}
console.log(userExtract("gauthamk70@gmail.com"));
