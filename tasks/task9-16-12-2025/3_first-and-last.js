
// Write a JavaScript program to find the first and last occurrence of a character in a string.

function firstNlast(ch, str) {
    let first = -1
    let last = -1

    for (let i = 0; i<str.length; i++) {

        if (str[i] == ch) {
            if (first == -1) {
                first = i
            }
            else{
                last=i
            }
        }
    }
    return [first,last]

}

console.log(firstNlast("a", "gauthamkrishna"));
