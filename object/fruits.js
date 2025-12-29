var fruits = {
    apple: 250,
    orange: 100,
    mango: 120,
    cherry: 220,
    guava: 90,
    banana: 70
}

// dispaly priducts whose price is>100
// for(let [ k,v ] of Object.entries(fruits)){
//     if(v>100){
//         console.log(k,v);

//     }
// }

// display products available in range of 50-150

var priceFilter = Object.entries(fruits).filter(item => item[1] > 50 && item[1] < 150)
// console.log(priceFilter);


// dispaly most expensive fruit

var expensive = Object.entries(fruits).reduce((it1, it2) => it1[1] > it2[1] ? it1 : it2)
console.log("expensive:", expensive);

// display the least expensive

var cheepest = Object.entries(fruits).reduce((it1, it2) => it1[1] > it2[1] ? it2 : it1)
console.log("cheapest:", cheepest);
