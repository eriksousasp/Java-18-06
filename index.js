function minhaFuncao() {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let textoFinal = " ";

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    if (numero1 && numero2) {
        if (numero1 > numero2) {
            textoFinal = "Numero 1 é maior que numero 2";
        } else {
            textoFinal = "Numero 2 é maior que numero 1";
        }
    } else {
        textoFinal = "Você precisa inserir um numero para fazer o comparativo"
    }
    alert(textoFinal);
}