function vogalConsoante() {
    let caracter = "";

    caracter = prompt("Informe o caracter desejado para verificação: ").toLowerCase();

    console.log(caracter.toLocaleLowerCase())
    console.log(caracter.toLocaleUpperCase())

    if ((caracter === 'a') || (caracter === 'e') || (caracter === 'i') || (caracter === 'o') || (caracter === 'u')) {
        alert("O caracter " + caracter + " é uma vogal.");
    } else {
        alert("O caracter " + caracter + " é uma consoante.");
    }
}