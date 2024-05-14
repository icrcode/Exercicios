function calcular() {

    let var1 = document.getElementById("var1").value;
    let var2 = document.getElementById("var2").value;
    let nomeFuncionario = document.getElementById("nomeFuncionario").value;
    let salarioBruto = document.getElementById("salarioBruto").value;
    let taxaDesconto;

    let resultados = "";

    if (var2 < var1) {
        resultados += "Diferença entre as duas variáveis: " + (var1 - var2) + "<br>";
    } else {
        resultados += "Diferença entre as duas variáveis: " + (var2 - var1) + "<br>";
    }

    resultados += "O dobro da primeira mais o triplo da segunda variável: " + (2*var1 + 3*var2) + "<br>";
    resultados += "Multiplicação das duas variáveis: " + (var1 * var2) + "<br>";

    if (var2 < var1) {
        console.log(var1, var2);
    } else {
        console.log(var2, var1);
    }

    if (salarioBruto <= 1000) {
        taxaDesconto = 0.08;
    } else if (salarioBruto > 1000 && salarioBruto <= 1500) {
        taxaDesconto = 0.085;
    } else {
        taxaDesconto = 0.09;
    }

    let valorINSS = salarioBruto * taxaDesconto;
    let salarioLiquido = salarioBruto - valorINSS;

    resultados += "Nome do Funcionário: " + nomeFuncionario + "<br>";
    resultados += "Salário bruto: R$: " + salarioBruto + "<br>";
    resultados += "Valor do INSS: R$: " + valorINSS + "<br>";
    resultados += "Salário líquido: R$: " + salarioLiquido;

    document.getElementById("resultados").innerHTML = resultados;

}