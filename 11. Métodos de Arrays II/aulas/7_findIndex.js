const cars = [
    { name: 'corola', brand: 'toyota', year: '2020', color: 'prata' },
    { name: 'argo', brand: 'fiat', year: '2021', color: 'preto' },
    { name: 'ranger', brand: 'ford', year: '2021', color: 'prata' },
    { name: 'hilux', brand: 'toyota', year: '2018', color: 'branco' }
];

const result = cars.findIndex((car)=>{
    return car.name === 'corola';
})

console.log(result)