var show = [
    { name: "vinland saga", type: "anime", IMDB: 9.5, duration: 9 },
    { name: "jijustu kaisan", type: "anime", IMDB: 9.4, duration: 15 },
    { name: "game of thrones", type: "Drama series", IMDB: 9.3, duration: 35 },
    { name: "god father", type: "movie", IMDB: 9.1, duration: 2 },
    { name: "FMAB", type: "anime", IMDB: 9.7, duration: 17 },
    { name: "avatar", type: "movie", IMDB: 8.7, duration: 3 },
    { name: "conjuring", type: "movie", IMDB: 6.7, duration: 1 },
    { name: "MHA", type: "anime", IMDB: 8.7, duration: 40 },
    { name: "breaking bad", type: "Drama series", IMDB: 9.5, duration: 50 },
    { name: "dark", type: "Drama series", IMDB: 9.0, duration: 25 },
    { name: "naruto", type: "anime", IMDB: 8.9, duration: 200 },
    { name: "one punch man", type: "anime", IMDB: 8.8, duration: 24 },
    { name: "inception", type: "movie", IMDB: 8.8, duration: 3 },
    { name: "interstellar", type: "movie", IMDB: 8.9, duration: 3 },
    { name: "stranger things", type: "Drama series", IMDB: 9.5, duration: 45 },
    { name: "death note", type: "anime", IMDB: 9.0, duration: 37 }

]

// display all show name
var allShowName = show.map(s=>s.name)
console.log(allShowName);

// dispay all movies
var movie = show.filter(s=>s.type=='movie').map(s=>s.name)
console.log()
