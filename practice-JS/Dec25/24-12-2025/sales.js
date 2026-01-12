const productSales = {
    laptop: 120,
    mobile: 250,
    headphones: 400,
    smartwatch: 180,
    tablet: 90,
    camera: 60,
    printer: 45,
    keyboard: 210,
    mouse: 320,
    speaker: 150
};

//q1 => trending product
var mostSales = Object.entries(productSales).reduce((it1, it2) => it1[1] > it2[1] ? it1 : it2)
console.log(mostSales);

//q2=> product with lowest sale
var leastSales = Object.entries(productSales).reduce((it1, it2) => it1[1] < it2[1] ? it1 : it2)
console.log(leastSales);

//q3 =>product with sales count > 200
var saleGt200 = Object.entries(productSales).filter(item => item[1] > 200)
console.log(saleGt200);

// q4 => total number of products sold
var totalSale = Object.entries(productSales).reduce((sum, value) => sum + value[1], 0)
console.log(totalSale);

//q5=> sort products wrt sales order by desc
var sort = Object.entries(productSales).sort((it1, it2) => it2[1] - it1[1])
console.log(sort);


