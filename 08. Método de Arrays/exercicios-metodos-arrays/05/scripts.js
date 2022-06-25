const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const agendarPaciente = (listaDePacientes, pacienteAgendado) => {
    listaDePacientes.push(pacienteAgendado)

    return listaDePacientes.join(', ');
};

const atenderPaciente = (listaDePacientes) => {
    listaDePacientes.shift();

    return listaDePacientes.join(', ');
};

const cancelarAtendimento = (listaDePacientes, pacienteCancelado) => {

    let indicePacienteARemover = listaDePacientes.indexOf(pacienteCancelado);
    let removerPaciente = listaDePacientes.splice(indicePacienteARemover, 1);

    return listaDePacientes.join(', ');
};

console.log(agendarPaciente(pacientes, 'Caribé')); //pacientes + Caribé no final
console.log(atenderPaciente(pacientes)); //remove José
console.log(cancelarAtendimento(pacientes, 'Ana')); //remove Ana
