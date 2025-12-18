// ⿦ Write a program to replace all spaces with a hyphen (-) in a string.

function replaceSpace(str){
    let result = ""
    for(let i=0; i<str.length; i++){
        
        if(str[i]==" "){
            result+="-"
        }
        else{
            result+=str[i]
        }
        
    }
    return result
   
}
console.log(replaceSpace("hello world"));
