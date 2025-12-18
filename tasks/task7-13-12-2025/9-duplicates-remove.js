
// ⿩ Create a function to remove duplicate characters from a string.
// Input: "hello" → Output: "helo"

function removeDuplicates(str){

    var result = ""
    for (let i=0; i<=str.length-1; i++){
        if(!result.includes(str[i])){
            result+=str[i]

        }
    }
    return result
}
console.log(removeDuplicates('hello'));
