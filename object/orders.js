var orders ={
    pizza:10,
    burger:20,
    pepsi:25,
    alfarm:27
}

var newOrderItem = "pepsi"
var quantity = 2

if(newOrderItem in orders){
    orders[newOrderItem]+=quantity
}
else{
    orders[newOrderItem]=quantity
}
// newOrderItem in orders? orders.newOrderItem+=quantity :orders.newOrderItem=quantity
console.log(orders);
