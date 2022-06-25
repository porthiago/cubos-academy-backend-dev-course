
// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };

//cliente: José
//itens:  uma tv, dois cabos usb e uma webcam
jose.carrinho.push({ ...tv, quantidade: 1 });
jose.carrinho.push({ ...caboUsb, quantidade: 2 });
jose.carrinho.push({ ...webcam, quantidade: 1 });
console.log(jose);

//cliente: Carlos
//itens:  dois notebooks
carlos.carrinho.push({ ...notebook, quantidade: 2 });
console.log(carlos);

//cliente: Patricia
//itens:  um teclado, dois cabos usb, um carregador, um mouse e um monitor
patricia.carrinho.push({ ...teclado, quantidade: 1 });
patricia.carrinho.push({ ...caboUsb, quantidade: 2 });
patricia.carrinho.push({ ...carregador, quantidade: 1 });
patricia.carrinho.push({ ...mouse, quantidade: 1 });
patricia.carrinho.push({ ...monitor, quantidade: 1 });
console.log(patricia);

//cliente: Renato
//itens:  cinco webcams
renato.carrinho.push({ ...webcam, quantidade: 5 });
console.log(renato);

//cliente: Roberto
//itens:  uma webcam, dois cabos usb e um monitor
roberto.carrinho.push({ ...webcam, quantidade: 1 });
roberto.carrinho.push({ ...caboUsb, quantidade: 2 });
roberto.carrinho.push({ ...monitor, quantidade: 1 });
console.log(roberto);







