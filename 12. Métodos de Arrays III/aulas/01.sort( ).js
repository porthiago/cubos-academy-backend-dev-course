// const numeros = [1, 30, 4, 14, 4, 4, 6, 5, 6, 80, 34, 35, 4, 100, 4, 256, 14];

// numeros.sort((a, b) => {
//     if (a < b) {
//         return -1
//     }
//     if (a > b) {
//         return 1
//     }

// });

// console.log(numeros);

// numeros.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//     if (a > b) {
//         return -1
//     }

// });

// console.log(numeros);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];
  items.sort(function (a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  console.log(items)