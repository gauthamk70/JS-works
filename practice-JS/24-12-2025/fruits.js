var fruits = {
    apple: 250,
    orange: 100,
    mango: 120,
    cherry: 220,
    guava: 90,
    banana: 70
}

// dispaly priducts whose price is>100
for (let [k, v] of Object.entries(fruits)) {
    if (v > 100) {
        console.log(k, v);

    }
}

var gt100 = Object.entries(fruits).filter(v => v[1] > 100)
// console.log(gt100);


// display products available in range of 50-150

var priceFilter = Object.entries(fruits).filter(v => v[1] > 50 && v[1] < 150)
// console.log(priceFilter);

// most expensive

var mostExp = Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)
console.log(mostExp);

// least expensive

var lestExp = Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it2:it1)
console.log(lestExp);

