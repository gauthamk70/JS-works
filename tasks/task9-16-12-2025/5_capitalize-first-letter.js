
//  Write a JavaScript program to capitalize the first letter of each word using string methods.

function capitalize(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    return words.join(' ')
}

console.log(capitalize("hi i am studying in luminar"));
