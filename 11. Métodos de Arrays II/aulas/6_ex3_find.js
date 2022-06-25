const cars = [
    { name: 'corola', brand: 'toyota', year: '2020', color: 'prata' },
    { name: 'argo', brand: 'fiat', year: '2021', color: 'preto' },
    { name: 'ranger', brand: 'ford', year: '2021', color: 'prata' },
    { name: 'hilux', brand: 'toyota', year: '2018', color: 'branco' }
];

const findCarData = (brand, carList) => {
    const result = carList.find((carData) => {
        return carData.brand === brand
    });

    console.log(result);
}

findCarData ('toyota', cars);