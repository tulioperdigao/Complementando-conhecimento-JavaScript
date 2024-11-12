// strings, number (int, float), boolean
// undefined, null, symbol (ES2015)

let string = "minha string - aspas 'simples'"
let string1 = 'minha string - aspas "duplas"'
let string2 = `minha template literal: ${string1}`

const n1 = 10
const n2 = 1.1
console.log(`O tipo de n1 é ${typeof n1} e seu valor é ${n1}`)
console.log(`O tipo de n1 é ${typeof n2} e seu valor é ${n2}`)

const isValid = true
console.log(`isValid: ${isValid}`)
console.log(`Tipo: ${typeof isValid}`)

let varTeste = null
console.log(varTeste)
console.log(typeof varTeste)
varTeste = 10
console.log(typeof varTeste, varTeste)