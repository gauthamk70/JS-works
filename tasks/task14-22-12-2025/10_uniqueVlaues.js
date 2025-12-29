// Create a new array that contains only unique values from the array.
var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];
var newArr = []
for(let n of numbers){
    if(newArr.includes(n)){
        
    }
    else{
        newArr.push(n)
    }
}
console.log(newArr);
