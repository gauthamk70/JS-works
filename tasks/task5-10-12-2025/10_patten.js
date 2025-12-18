// 10. Print:

// A B C D
// B C D A
// C D A B
// D A B C
for (let r = 1; r <= 4; r++) {
    let pattern = "";
    for (let c = 1; c <= 4; c++) {
        let ch = String.fromCharCode(65 + ((r + c - 2) % 4));
        pattern += ch + " ";
    }
    console.log(pattern);
}
