function verificarNumero() {
    let numeros = []
    if (arguments.length !== 0) {
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number' || arguments[i] == '') {
                if (arguments[i] == '') {
                    console.log('0')
                    break
                } else {
                    console.log('ERRO! Não é um valor numérico.')
                    break
                }
            }
            numeros.push(arguments[i])
        }
        calcularMedia(numeros)
    } else {
        console.log('0')
    }
}

function calcularMedia(num) {
    let somaNumeros = 0
    for (let i = 0; i < num.length; i++) {
        somaNumeros += num[i]
    }
    let media = somaNumeros / num.length
    console.log(`A média é ${media}.`)
}

verificarNumero('')
