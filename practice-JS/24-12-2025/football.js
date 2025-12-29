var worldCup = {
    barzil: 5,
    portugal: 0,
    england: 1,
    germany: 4,
    argentina: 3,
    urugay: 2,
    espain: 1,
    italy: 4,
    france: 2
}

// print all the countrys
for(let k of Object.keys(worldCup)){
    console.log(k);
    
}

// print the values
for(let k of Object.values(worldCup)){
    console.log(k);
    
}

// print both key and value
for(let k of Object.entries(worldCup)){
    console.log(k[0],k[1]);
    
}