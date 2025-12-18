//  Write a JavaScript program using nested loops to print the following pattern:

// 1
// 12
// 123
// 1234



function pattern(n) {
    for (let r = 1; r <= n; r++) {
        let pattern = ""
        for (let c = 1; c <= r; c++) {
            pattern += c

        }
        console.log(pattern);
    }
}

pattern(5)