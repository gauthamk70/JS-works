
function addNumber(num1, num2) {
    console.log("addition result:", num1 + num2);

}

addNumber(10, 20)
addNumber(50, 7)

function greetings(name) {
    console.log("good morning", name);

}
greetings("gautham")

function division(num1, num2) {
    console.log("division result", (num1 / num2));

}
division(654654, 765)


function leapYear(year) {
    if ((year % 100 == 0 && year % 400 == 0) || (year % 100 != 0 && year % 4 == 0)) {
        console.log("leap year");

    }
    else {
        console.log("not leap year");
    }
}
leapYear(2024)