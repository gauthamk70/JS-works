// create a object products with attributes
// code, title, price, colour

var products = {
    code: 64315445468,
    title: "asus tuf",
    price: 22000,
    colour: "black"

}

// to check attribute exist or not
// attribute in objectName
console.log("offer" in products ? "exist" : "dont exist");
console.log("price" in products ? "exist" : "dont exist");
console.log("code" in products ? "exist" : "dont exist");

// add an atribute
products.offer = "20 % off"
console.log(products.offer);

// update an atribute
products.price += 500
console.log(products.price);

// add new property quantity as 10 in quantity do not exist 
// else update quantity as current quantity + 10

"quantity" in products ? products.quantity += 10 : products.quantity = 10
console.log(products);







