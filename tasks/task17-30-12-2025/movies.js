// Task 17 || array Object || 30-12-2025

var movies = [
  {
    id: 1,
    title: "Drishyam",
    director: "Jeethu Joseph",
    price: 250,
    genre: "Thriller",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Premam",
    director: "Alphonse Puthren",
    price: 200,
    genre: "Romance",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    price: 450,
    genre: "Science Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Interstellar",
    director: "Christopher Nolan",
    price: 500,
    genre: "Sci-Fi/Drama",
    language: "English"
  },
  {
    id: 5,
    title: "Bangalore Days",
    director: "Anjali Menon",
    price: 300,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 6,
    title: "Lucifer",
    director: "Prithviraj Sukumaran",
    price: 350,
    genre: "Action/Thriller",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "Charlie",
    director: "Martin Prakkat",
    price: 280,
    genre: "Romance/Drama",
    language: "Malayalam"
  },
  {
    id: 8,
    title: "Joker",
    director: "Todd Phillips",
    price: 420,
    genre: "Psychological Thriller",
    language: "English"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    price: 550,
    genre: "Action/Fantasy",
    language: "English"
  },
  {
    id: 10,
    title: "KGF: Chapter 1",
    director: "Prashanth Neel",
    price: 380,
    genre: "Action",
    language: "Kannada"
  },
  {
    id: 11,
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    price: 480,
    genre: "Epic/Fantasy",
    language: "Telugu"
  },
  {
    id: 12,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    price: 400,
    genre: "Drama",
    language: "English"
  },
  {
    id: 13,
    title: "Titanic",
    director: "James Cameron",
    price: 370,
    genre: "Romance/Drama",
    language: "English"
  },
  {
    id: 14,
    title: "Uyare",
    director: "Manu Ashokan",
    price: 260,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 15,
    title: "Minnal Murali",
    director: "Basil Joseph",
    price: 320,
    genre: "Superhero/Fantasy",
    language: "Malayalam"
  }
];


console.log("_".repeat(100));

// 1. Display all movie titles using map().
console.log("all movies: ",movies.map(m=>m.title));
console.log("_".repeat(100));

// 2. Find all movies where the language is "Malayalam".
var malayalamMovies = movies.filter(m=>m.language=="Malayalam").map(m=>m.title)
console.log("Malayalam movies:",malayalamMovies);
console.log("_".repeat(100));

// 3. Find all movies with a price greater than 300.
var priceGt300 = movies.filter(m=>m.price>300).map(m=>[m.title,m.price])
console.log("movies with a price greater than 300:",priceGt300);
console.log("_".repeat(100));

// 4. Display the title and director of all English movies.
var engMovieDirector = movies.filter(m=>m.language=="English").map(m=>[m.title,m.director])
console.log("title and director of all English movies:",engMovieDirector);
console.log("_".repeat(100));

// 5. Find the total price of all movies using reduce().
var totalPrice = movies.reduce((sum,m)=>sum+m.price,0)
console.log("Total price of all movies:",totalPrice);
console.log("_".repeat(100));

// 6. Find the average price of all movies.
var avgPrice = Math.round(totalPrice/movies.length)
console.log("Average price of a movie: ",avgPrice);
console.log("_".repeat(100));

// 7. Find the movie with the highest price.
var costlyMovie = movies.reduce((m1,m2)=>m1.price>m2.price?m1:m2)
console.log("movie with the highest price: ",costlyMovie);
console.log("_".repeat(100));

// 8. Find the movie with the lowest price
var cheapMovie = movies.reduce((m1,m2)=>m1.price>m2.price?m2:m1)
console.log("movie with the lowest price:",cheapMovie);
console.log("_".repeat(100));

// 9. Find all movies directed by Christopher Nolan.
var nolanMovies = movies.filter(m=>m.director=="Christopher Nolan").map(m=>m.title)
console.log("Christopher nolan movies: ",nolanMovies);
console.log("_".repeat(100));


// 10. Count how many movies are in English and how many are in Malayalam.
var englishMovieCount = 0
var malayalamMovieCount = 0
for(let m of movies){
    if(m.language=="Malayalam"){
        malayalamMovieCount++
    }
    else if (m.language=="English"){
        englishMovieCount++
    }
}
console.log("English movie count:",englishMovieCount);
console.log("Malayalam movie count:",malayalamMovieCount);
console.log("_".repeat(100));


// 11. Sort the movies by price in ascending order.
movies.sort((m1,m2)=>m1.price-m2.price)
console.log("movies by price in ascending order:",movies);
console.log("_".repeat(100));

// 12. Sort the movies by title in alphabetical order
movies.sort((m1,m2)=>m1.title.localeCompare(m2.title))
console.log("movies by title in alphabetical order",movies);
console.log("_".repeat(100));

// 13. Find the first movie that belongs to the genre "Thriller".
var thrillerMovie = movies.filter(m=>m.genre=="Thriller")[0]
console.log("Thriller movie:",thrillerMovie);
console.log("_".repeat(100));

// 14. Create a new array containing only movie titles and prices.
var movieTitleAndPrice = movies.map(m=>[m.title,m.price])
console.log("array containing only movie titles and prices:",movieTitleAndPrice);
console.log("_".repeat(100));

// 15. Check whether any movie price is below 200 (use some()).
var movieBelow200 = movies.some(m=>m.price<200)
console.log(movieBelow200);
console.log("_".repeat(100));

