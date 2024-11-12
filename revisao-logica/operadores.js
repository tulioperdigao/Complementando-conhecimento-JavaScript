//OPERADORES ARITMÉTICOS
// + - * / % **
let n1 = 10
let n2 = 5
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2 ** 3)

//OPERADORES DE ATRIBUIÇÃO
let n3 = 20
//n3 = n3 + 15
n3 += 15

//OPERADORES DE INCREMENTO E DECREMENTO
let i = 0
i++
console.log(i)
i--
console.log(i)

//OPERADORES DE COMPARAÇÃO
console.log(n1, n2, n3)

console.log(n1 != '10')
console.log(n1 !== '10')

//OPERADORES LÓGICOS
/*
Para uma pessoa viajar para o exterior:
-  precisa ser maior de 18 anos
OU
Acompanhado com os pais
E
Ter comprado o bilhete
*/
let idade = 18
let acompanhadoPais = false
let temBilhete = false
if ((idade >= 18 || acompanhadoPais == true) && temBilhete == true) {
    console.log('Pode viajar para o exterior!')
} else {
    console.log('Não pode viajar para o exterior :(')
}