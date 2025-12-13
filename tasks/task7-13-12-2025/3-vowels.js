// ⿣ Create a function to count the number of vowels in a string.
// Input: "javascript" → Output: 3

function vowelCount(str) {
    let count = 0
    let vowels = "aeiou"
    str = str.toLowerCase()  // function to make all charecters to lower case
    for (let i = 0; i <= str.length - 1; i++) {
        if (vowels.includes(str[i])) {    //.includes()  function to find if any elent is included in second elmt 
            count++
        }
    }
    return count
}

console.log(vowelCount("jAvascript"));

