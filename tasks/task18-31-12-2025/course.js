// Task 18 || Course dataset || 31-12-2025

var courses = [
  { id: 1, title: "HTML Basics", instructor: "John Doe", price: 999, category: "Web Development", duration: "10 hrs", level: "Beginner" },
  { id: 2, title: "CSS Mastery", instructor: "Jane Smith", price: 1299, category: "Web Development", duration: "12 hrs", level: "Beginner" },
  { id: 3, title: "JavaScript Fundamentals", instructor: "Alex Brown", price: 1799, category: "Web Development", duration: "20 hrs", level: "Beginner" },
  { id: 4, title: "Advanced JavaScript", instructor: "Alex Brown", price: 2499, category: "Web Development", duration: "25 hrs", level: "Advanced" },
  { id: 5, title: "React JS", instructor: "Emily White", price: 2999, category: "Frontend", duration: "30 hrs", level: "Intermediate" },
  { id: 6, title: "Node.js", instructor: "Michael Green", price: 2799, category: "Backend", duration: "28 hrs", level: "Intermediate" },
  { id: 7, title: "Express.js", instructor: "Michael Green", price: 1999, category: "Backend", duration: "18 hrs", level: "Intermediate" },
  { id: 8, title: "MongoDB Basics", instructor: "Sarah Lee", price: 1599, category: "Database", duration: "15 hrs", level: "Beginner" },
  { id: 9, title: "MySQL Complete Guide", instructor: "David Clark", price: 1899, category: "Database", duration: "22 hrs", level: "Beginner" },
  { id: 10, title: "Python for Beginners", instructor: "Rachel Adams", price: 1699, category: "Programming", duration: "20 hrs", level: "Beginner" },
  { id: 11, title: "Data Structures in Python", instructor: "Rachel Adams", price: 2299, category: "Programming", duration: "25 hrs", level: "Intermediate" },
  { id: 12, title: "Java Basics", instructor: "Robert King", price: 1899, category: "Programming", duration: "24 hrs", level: "Beginner" },
  { id: 13, title: "Spring Boot", instructor: "Robert King", price: 2999, category: "Backend", duration: "32 hrs", level: "Advanced" },
  { id: 14, title: "C Programming", instructor: "Linda Scott", price: 1399, category: "Programming", duration: "18 hrs", level: "Beginner" },
  { id: 15, title: "C++ Fundamentals", instructor: "Linda Scott", price: 1599, category: "Programming", duration: "20 hrs", level: "Beginner" },
  { id: 16, title: "Machine Learning", instructor: "Andrew Miller", price: 3999, category: "AI", duration: "40 hrs", level: "Advanced" },
  { id: 17, title: "Deep Learning", instructor: "Andrew Miller", price: 4599, category: "AI", duration: "45 hrs", level: "Advanced" },
  { id: 18, title: "UI/UX Design", instructor: "Sophia Wilson", price: 2499, category: "Design", duration: "26 hrs", level: "Intermediate" },
  { id: 19, title: "Figma Essentials", instructor: "Sophia Wilson", price: 1799, category: "Design", duration: "16 hrs", level: "Beginner" },
  { id: 20, title: "Cyber Security Basics", instructor: "Daniel Perez", price: 2199, category: "Security", duration: "22 hrs", level: "Beginner" },
  { id: 21, title: "Ethical Hacking", instructor: "Daniel Perez", price: 3499, category: "Security", duration: "35 hrs", level: "Advanced" },
  { id: 22, title: "Cloud Computing", instructor: "Emma Turner", price: 2899, category: "Cloud", duration: "28 hrs", level: "Intermediate" },
  { id: 23, title: "AWS Fundamentals", instructor: "Emma Turner", price: 3199, category: "Cloud", duration: "30 hrs", level: "Intermediate" },
  { id: 24, title: "DevOps Basics", instructor: "Oliver Brown", price: 2699, category: "DevOps", duration: "26 hrs", level: "Intermediate" },
  { id: 25, title: "Docker & Kubernetes", instructor: "Oliver Brown", price: 3799, category: "DevOps", duration: "34 hrs", level: "Advanced" }
];

// 1. Create a new array containing only course titles.
var courseTitle = courses.map(c=>c.title)
// console.log("Course title:",courseTitle);

// 2. Find all courses taught by "Alex Brown".
var alexbrownCourse = courses.filter(c=>c.instructor=="Alex Brown").map(c=>c.title)
// console.log("courses taught by Alex Brown:",alexbrownCourse);

// 3. Find all courses whose duration is more than 25 hrs.
var courseDurationGt25 = courses.filter(c=>c.duration>"25 hrs").map(c=>[c.title,c.duration])
// console.log("courses whose duration is more than 25 hrs:",courseDurationGt25);

// 4. Create a new array with title and duration only.
var titleAndDuration = courses.map(c=>[c.title,c.duration])
// console.log("title and duration:",titleAndDuration);

// 5. Find all courses where the level is "Beginner".
var beginnerCourse = courses.filter(c=>c.level=="Beginner").map(c=>[c.title,c.level])
// console.log("Beginner courses:",beginnerCourse);

// 6. Sort the courses by duration (ascending order).
var sortwrtDuration = courses.sort((c1,c2)=>c1.duration.localeCompare(c2.duration)).map(c=>[c.title,c.duration])
// console.log("courses by duration (ascending order)",sortwrtDuration);


// 7. Sort the courses by level (Beginner → Intermediate → Advanced).
var order = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };

var sortedCourses = courses.sort((c1, c2) => order[c1.level] - order[c2.level]).map(c=>[c.title,c.level])

console.log(sortedCourses);


// 8. Find all courses in the "Backend" category.
var backendCategoryCourse = courses.filter(c=>c.category=="Backend").map(c=>[c.title,c.category])
// console.log("courses in the Backend category:",backendCategoryCourse);

// 9. Find the average price of all courses.
var totalPrice = courses.reduce((s,c)=>s+c.price,0)
var avgPrice = totalPrice/courses.length
// console.log("average price:",avgPrice);

// 10. Count how many courses belong to each level.
var levelSummary = {}
for(let c of courses){
  let level=c.level
  if(level in levelSummary){
    levelSummary[level]+=1
  }
  else{
    levelSummary[level]=1
  }
}
// console.log("courses belong to each level:",levelSummary);

// 11. Find the most expensive course price.
var costlyCourse = courses.reduce((c1,c2)=>c1.price>c2.price?c1:c2)
// console.log("most expensive course:",costlyCourse);

// 12. Create a new array with title and price of each course.
var titleAndPrice = courses.map(c=>[c.title,c.price])
// console.log("array with title and price of each course:",titleAndPrice);

// 13. Find the total number of courses in each category.
var categorySummary = {}
for(let c of courses){
  let category=c.category
  if(category in categorySummary){
    categorySummary[category]+=1
  }
  else{
    categorySummary[category]=1
  }
}
// console.log("number of courses in each category:",categorySummary);

// 14. Sort the courses by price (low to high).
var sortedCourselowtoHigh = courses.sort((c1,c2)=>c1.price-c2.price).map(c=>[c.title,c.price])
// console.log("courses by price (low to high):",sortedCourselowtoHigh);

// 15. Find the total price of all courses.
var totalPrice = courses.reduce((s,c)=>s+c.price,0)
// console.log("total price:",totalPrice);

// 16. Sort the courses by price (high to low).
var sortedCourseHightoLow = courses.sort((c1,c2)=>c2.price-c1.price).map(c=>[c.title,c.price])
// console.log("courses by price (high to low):",sortedCourseHightoLow);

// 17. Create a new array showing title and instructor name.
var titleAndInstructor = courses.map(c=>[c.title,c.instructor])
// console.log("title and instructor name:",titleAndInstructor);

// 18. Find all courses with price greater than 2500.
var priceGt2500 = courses.filter(c=>c.price>2500).map(c=>[c.title,c.price])
// console.log("courses with price greater than 2500:",priceGt2500);

// 19. Create a new array of course titles in uppercase.
var coursetitleUpper = courses.map(c=>c.title.toUpperCase())
// console.log("array of course titles in uppercase:",coursetitleUpper);

// 20. Sort the courses by title (alphabetical order).
var titleAlphabetical = courses.map(c=>c.title).sort((t1,t2)=>t1.localeCompare(t2))
// console.log("courses by title (alphabetical order):",titleAlphabetical);
