// TASK 23 || ProgrammingLan || 09-01-2026

const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

//   Q1: Print the names of all programming languages in the array.
var allLanguage = programmingLanguages.map(l=>l.name)
console.log(allLanguage);

//   Q2: Print the total number of programming languages in the array.
console.log('total number of programming language:',allLanguage.length);

//   Q3: Print the languages that are popular.
var popularLanguange = programmingLanguages.filter(l=>l.popular==true).map(l=>l.name)
console.log(popularLanguange);

//   Q4: Print the names of the languages created after the year 2000.
var languagesAfter2000 = programmingLanguages.filter(l=>l.yearCreated>2000).map(l=>l.name)
console.log(languagesAfter2000);

//   Q5: Print the languages that are both functional and object-oriented.
var functionalAndObject = programmingLanguages.filter(l=>l.paradigms.includes('Functional')&&l.paradigms.includes('Object-oriented')).map(l=>l.name)
console.log(functionalAndObject);

//   Q6: Print the names of the creators of the languages.
var Creaters = programmingLanguages.map(p=>p.creator)
console.log(Creaters);

//   Q7: Print the names of languages that have "Script" in their name.
var namesWithScript = programmingLanguages.filter(p=>p.name.includes('Script')).map(p=>p.name)
console.log(namesWithScript);

//   Q8: Print the names of programming languages that were created before the year 1995.
var languagesBefore1995 = programmingLanguages.filter(p=>p.yearCreated<1995).map(p=>[p.name,p.yearCreated])
console.log(languagesBefore1995);

//   Q9: Print the names of programming languages that support more than two paradigms.
var moreThan2Paradims = programmingLanguages.filter(p=>p.paradigms.length>2).map(p=>p.name)
console.log(moreThan2Paradims);

//   Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.
var oldestLanguage = programmingLanguages.reduce((l1,l2)=>l1.yearCreated>l2.yearCreated?l2:l1)
console.log(oldestLanguage);
