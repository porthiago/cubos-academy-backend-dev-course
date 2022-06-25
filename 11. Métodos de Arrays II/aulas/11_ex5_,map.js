const products = [
    { name: "arroz", price: 500 },
    { name: "carne", price: 3200 },
    { name: "biscoito", price: 450 },
    { name: "banana", price: 320 },
];


const newArrayProducts = products.map((productObject)=> {
    return {
        name: productObject.name,
        price: productObject.price,
        discount: productObject.price * 0.1
    }
});

console.log(newArrayProducts)



