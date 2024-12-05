/*
Requisitos:
- Deve receber peso, altura e uma função de call-back opcional.
- Se não receber call-back, retornar o imc calculado.
- Se receber call-back, deve retornar o retorno do callback.
*/

function calcularImc(peso, altura, cb) {
    let imc = peso / (altura ** 2)
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        console.log(0)
    }  else if(typeof cb === 'undefined') {
        console.log(imc)
    } else {
        cb(imc)
    }
}

const classificaImc = function(imc) {
    if(typeof imc !== 'number') {
        throw Error('IMC não é um valor numérico!')
    } else {
        if(imc <= 16.9) {
            console.log('Muito abaixo do peso.')
        } else if (imc <= 18.4) {
            console.log('Abaixo do peso.')
        } else if (imc <= 24.9) {
            console.log('Peso normal.')
        } else if (imc <= 29.9) {
            console.log('Acima do peso.')
        } else if (imc <= 34.9) {
            console.log('Obesidade Grau I')
        } else if (imc <= 40) {
            console.log('Obesidade Grau II')
        } else {
            console.log('Obesidade Grau III')
        }
    }
}

calcularImc(60, 1.65, classificaImc)