function lancamentoSoyuz() {
    var contagem = 10;

    let sequencia = setInterval(
        function contagemLancamento() {
        console.log(contagem);
        contagem--;
        //contagem = contagem - 1
        
        //informa a iginição
        if (contagem == 6) {
            console.log("зажигание...");
        }
        // traz o lançamento
        if (contagem < 1) {
            clearInterval(sequencia);
            console.log("взлет!");
        }
    }
    , 1000)
}