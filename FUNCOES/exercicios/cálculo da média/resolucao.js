(function() {  //Função Auto-Invocável para otimizar o programa
    function calcularMedia() {
        let total = 0
        let qtd = arguments.length
        for (let i = 0; i < qtd; i++) {
            if(typeof arguments[i] !== 'number') {  //Verificando se arguments não é número
                throw Error('Apenas números!')
            }
            total += arguments[i]
        }
        return (total / qtd) || 0 //média
    }

    let media = calcularMedia()
    console.log(media)
})()