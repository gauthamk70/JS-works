// O E O E
// O E O E
// O E O E

for (let row = 1; row <= 3; row++) {
    let pattern = ""

    for (let col = 1; col <= 4; col++) {

        if (col % 2 == 0) {
            pattern = pattern + "E "
        }
        else {
            pattern = pattern + "O "
        }
    }
    console.log(pattern);
}