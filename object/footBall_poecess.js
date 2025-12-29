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

// dispaly contry name with morethan one worldcup
for (let [k, v] of Object.entries(worldCup)) {
    if (v > 1) {
        console.log(k, v);
    }
}