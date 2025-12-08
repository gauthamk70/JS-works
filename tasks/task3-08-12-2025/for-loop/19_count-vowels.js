// 19. Count vowels in a string

// Given a string: "javascript", use a for loop to count how many vowels it contains.

var str = "javascript"
var count = 0
for(let ch of str){
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        count++
    }
}
console.log(count);

