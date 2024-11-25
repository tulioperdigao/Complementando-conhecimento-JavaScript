
// function init() {
//     let isValid = false
//     console.log('init menu', isValid)
// }
// init()

(function (win, doc) {

    win.alert('Olá Mundo!')
    let isValid = false
    console.log('init menu', isValid)

    function init() {
        console.log('init do menu')
    } 
    init()
}) (window, document)