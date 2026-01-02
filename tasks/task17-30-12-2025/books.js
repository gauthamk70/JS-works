var books = [
    {
        id: 1,
        title: "Aadujeevitham (Goat Days)",
        author: "Benyamin",
        price: 350,
        genre: "Contemporary Fiction",
        language: "Malayalam"
    },
    {
        id: 2,
        title: "Indulekha",
        author: "O. Chandu Menon",
        price: 250,
        genre: "Classic Novel",
        language: "Malayalam"
    },
    {
        id: 3,
        title: "The God of Small Things",
        author: "Arundhati Roy",
        price: 499,
        genre: "Literary Fiction",
        language: "English"
    },
    {
        id: 4,
        title: "Khasakkinte Ithihasam",
        author: "O. V. Vijayan",
        price: 320,
        genre: "Magical Realism",
        language: "Malayalam"
    },
    {
        id: 5,
        title: "Atomic Habits",
        author: "James Clear",
        price: 550,
        genre: "Self-Help",
        language: "English"
    },
    {
        id: 6,
        title: "Balyakalasakhi",
        author: "Vaikom Muhammad Basheer",
        price: 180,
        genre: "Romance/Tragedy",
        language: "Malayalam"
    },
    {
        id: 7,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 399,
        genre: "Classic Fiction",
        language: "English"
    },
    {
        id: 8,
        title: "Chemmeen",
        author: "Thakazhi Sivasankara Pillai",
        price: 290,
        genre: "Social Realism",
        language: "Malayalam"
    },
    {
        id: 9,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 650,
        genre: "Non-Fiction/History",
        language: "English"
    },
    {
        id: 10,
        title: "Manjaveyil Maranangal",
        author: "Benyamin",
        price: 420,
        genre: "Mystery/Thriller",
        language: "Malayalam"
    }
];

// display most expensive book
var mostExp = books.reduce((b1, b2) => b1.price > b2.price ? b1 : b2).price
// console.log(mostExp);
var mostExpBook = books.filter(b => b.price == mostExp).map(b => b.title)
console.log("most expensive book:",mostExpBook);

// count of books and count of genres
var bookCount = books.length
console.log("number of books:", bookCount);
var genre = []

for (let b of books) {
    if (genre.includes(b.genre)) {

    }
    else {
        genre.push(b.genre)
    }
}
var genreCount = genre.length
console.log("number of genre:", genreCount);

// how many books are in english language
var engBookCount = books.filter(b => b.language == "English").length
console.log("engilst book count:", engBookCount);

// list titles of malayalam books
var malBooks = books.filter(b => b.language == "Malayalam").map(b => b.title)
console.log("malayalam books:",malBooks);

// total price of books combined
var totalPrice = books.reduce((total, b) => total + b.price, 0)
console.log("total price:", totalPrice);

// Group books based on language (English vs Malayalam).
var englishBooks = []
var malayalamBooks = []
for (let b of books) {
    if (b.language == "English") {
        englishBooks.push(b.title)
    }
    else if (b.language == "Malayalam") {
        malayalamBooks.push(b.title)
    }
}
console.log("english books :", englishBooks);
console.log("malayalam books :", malayalamBooks);

// Find the book with the longest title.

var longestName = books.reduce((b1, b2) => b1.title.length > b2.title.length ? b1 : b2).title
console.log("book with the longest title",longestName);

// sort books in alphabetical order
var sorted = books.sort((b1, b2) => b1.title.localeCompare(b2.title)).map(b => b.title)
console.log("sort books in alphabetical order:",sorted);

// how many books are in each language
var languageBooks = {}

for (let b of books) {
    let lang = b.language
    if (lang in languageBooks) {
        languageBooks[lang] += 1

    }
    else {
        languageBooks[lang] = 1

    }
}
console.log("books in each language:",languageBooks);


// language with most number of books
var most = Object.entries(languageBooks).reduce((l1, l2) => l1[1] > l2[1] ? l1 : l2)
console.log("language with most number of books:",most);

// language with least number of books
var least = Object.entries(languageBooks).reduce((l1, l2) => l1[1] > l2[1] ? l2 : l1)
console.log("language with least number of books:",least);











