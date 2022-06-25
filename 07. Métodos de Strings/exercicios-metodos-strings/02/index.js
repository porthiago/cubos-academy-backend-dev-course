const cpf = "12345678901";
const cnpj = "12345678000199";

function formatarCPF(CPF) {

    let CPF_Convertido = ' ';

    if (CPF.length === 11) {

        CPF_Convertido = CPF.slice(0, 3) + '.' + CPF.slice(3, 6) + '.' + CPF.slice(6, 9) + '-' + CPF.slice(9);

        console.log(CPF_Convertido);


    } else {

        console.log('CPF Inválido');
    }
}

function formatarCNPJ(CNPJ) {

    let CNPJ_Convertido = ' ';

    if (CNPJ.length === 14) {

        CNPJ_Convertido = CNPJ.slice(0, 2) + '.' + CNPJ.slice(2, 5) + '.' + CNPJ.slice(5, 8) + '/' + CNPJ.slice(8, 12) + '-' + CNPJ.slice(12, 14);

        console.log(CNPJ_Convertido);


    } else {

        console.log('CNPJ Inválido');
    }
}

formatarCPF('11111111111');
formatarCPF('22222222222');
formatarCPF('33333333333');
formatarCPF('44444444444');
formatarCPF('55555555555');
formatarCPF('66666666666');
// formatarCNPJ(cnpj);