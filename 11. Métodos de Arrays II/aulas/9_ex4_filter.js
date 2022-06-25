const teachers = [{
        nome: "Guido",
        stack: "backend"
    },
    {
        nome: "Vidal",
        stack: "backend"
    },
    {
        nome: "Dani",
        stack: "frontend"
    },
    {
        nome: "Diego",
        stack: "frontend"
    },
    {
        nome: "Léo",
        stack: "backend"
    },
    {
        nome: "Ruli",
        stack: "frontend"
    },
];

const filterStack = (teachersArray, stack) => {

    let filteredStack = undefined;

    if (stack === 'backend') {
        filteredStack = teachersArray.filter((teacher) => {
            return teacher.stack === stack;
        })
    } else {
        filteredStack = teachersArray.filter((teacher) => {
            return teacher.stack === stack;
        })
    }

    console.log(filteredStack)
}

filterStack(teachers,'backend');