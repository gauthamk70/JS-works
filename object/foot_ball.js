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

// for(let k in worldCup){
//     console.log(k);

// }

for (let k of Object.keys(worldCup)) {
    console.log(k);
}

for (let v of Object.values(worldCup)) {
    console.log(v);
}

for (let item of Object.entries(worldCup)) {
    // console.log(item);
    console.log(item[0], item[1]);
}