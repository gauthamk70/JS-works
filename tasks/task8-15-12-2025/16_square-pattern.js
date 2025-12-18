
//  Write a program using nested loops to print a square star pattern of size N:

// * * *
// * * *
// * * *

function squarePattern(n) {
    for (let r = 1; r <= n; r++) {
        let pattern = ""
        for (let c = 1; c <= n; c++) {
            pattern += "* "
        }
        console.log(pattern);

    }
}

squarePattern(5)
