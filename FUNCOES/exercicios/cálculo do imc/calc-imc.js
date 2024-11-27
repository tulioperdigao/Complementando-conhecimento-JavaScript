/* REQUISITOS (Calcular IMC):
IMC = peso/altura²
Deve retornar um único número
Deve gerar um erro se receber um parâmetro não número
Deve retornar erro caso não receba nenhum parâmetro 
*/

/* REQUISITOS (Classificar IMC):
Deve receber um número (IMC)
Deve retornar um string
Deve gerar um erro se receber um parâmetro não número
Deve retornar erro caso não receba nenhum parâmetro
*/

(function () {

    function calcularImc(peso, altura) {
        if (typeof peso !== 'number' || typeof altura !== 'number') {
            throw Error('Apenas valores numéricos')
        } else {
            let imc = peso / (altura ** 2)
            return Number(imc.toFixed(2))
        }
    }

    let indiceImc = calcularImc(67, 1.65)
    console.log(indiceImc)
    
    function classificarImc(imc) {
        if(typeof imc !== 'number') {
            throw Error('IMC não é um valor numérico!')
        } else {
            if(imc <= 16.9) {
                return 'Muito abaixo do peso.'
            } else if (imc <= 18.4) {
                return 'Abaixo do peso.'
            } else if (imc <= 24.9) {
                return 'Peso normal.'
            } else if (imc <= 29.9) {
                return 'Acima do peso.'
            } else if (imc <= 34.9) {
                return 'Obesidade Grau I'
            } else if (imc <= 40) {
                return 'Obesidade Grau II'
            } else {
                return 'Obesidade Grau III'
            }
        }
    }

    let classificacaoImc = classificarImc(indiceImc)
    console.log(classificacaoImc)
})()