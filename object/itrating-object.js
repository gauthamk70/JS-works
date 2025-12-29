
var vegitables = {
    onion: 75,
    potato: 60,
    carrot: 70,
    beans: 100,
    garlic: 200,
    chilly: 120,
    brinjal: 50
}

for (let key in vegitables) {
    // console.log(key, ":", vegitables[key]);

}

// display all veg name under 65

for (let key in vegitables) {
    if (vegitables[key] < 65) {
        console.log(key);
    }
}

// display most costly product

var maxPrice = 0
for(let key in vegitables){
    if (vegitables[key]>maxPrice){
        maxPrice=vegitables[key]
    }
}
console.log(maxPrice);

for (let key in vegitables){
    let currentPrice=vegitables[key]
    if(currentPrice==maxPrice){
        console.log(key,currentPrice);
        
    }
}
