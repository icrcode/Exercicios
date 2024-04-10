function viceVersa() {
    let numero = 0;

    numero = parseInt(prompt("Informe o número deejado: "));

    if (numero == 0) {
        alert("O número informado é nulo.");
    }
    else if(numero % 2 == 0) {
        //pesquisa o que é um modulo! %
        alert("Número par informado. Convertendo para ímpar...");
        numero++;
        alert("Conversão concluída: " + numero);
    } else {
        alert("Número ímpar informado. Convertendo para par...");
        numero++;
        alert("Conversão concluída: " + numero);
    }
}