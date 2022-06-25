//renda mensal do aluno, em centavos.
let rendaMensalEmCentavos = 100000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
let mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
let totalJaPagoPeloAluno = 1700000;

if (rendaMensalEmCentavos > 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000) {

    rendaMensalEmCentavos = rendaMensalEmCentavos * 0.18;

    console.log(`O valor da parcela desse mês é R$ R$ ${rendaMensalEmCentavos / 100}`);

} else if (mesesDecorridos > 60) {

    console.log("O prazo do seu débito EXPIROU!");

} else if (totalJaPagoPeloAluno >= 18_000_00) {

    console.log("Parabéns, você quitou todas as suas parcelas!")

} else {

    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")

}


