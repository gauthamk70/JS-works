
// Write a function to convert the first letter of each word to uppercase (Title Case).
// Input: "hello world" → Output: "Hello World"

function uppercase(str){
    var words = str.split(" ")
    for(let i=0;i<words.length; i++){
        words[i]=words[i][0].toUpperCase()+words[i].slice(1)
        
    }
    let str1=words.join(' ')
    return str1
    
}

console.log(uppercase("hello world"));

