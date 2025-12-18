
// Write a JavaScript program using nested loops to print a multiplication table from 1 to 5.

for (let i = 1; i <= 5; i++) {
    let table = ""
    for (let j = 1; j <= 10; j++) {
        table += `${i} X ${j} = ${i * j}`
        if (j < 10) table += "|"
    }
    console.log(table);

}