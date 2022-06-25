const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const atenderPacientes = (listaDePacientes, tipodeOperacao, nomeDoPaciente) => {

    if (tipodeOperacao === 'agendar') {

        pacientes.push(nomeDoPaciente);

    } else if (tipodeOperacao === 'atender') {

        pacientes.shift();
    }

    return pacientes.join(', ');
};

atenderPacientes(pacientes, 'agendar', 'Carlos');
atenderPacientes(pacientes, 'atender');
console.log(atenderPacientes(pacientes, 'atender'));
