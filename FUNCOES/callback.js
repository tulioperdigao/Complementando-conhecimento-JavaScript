function teste(cb) {
    console.log('Função teste!')
    if(typeof cb === 'function') {
        cb(30)
    }
}

const fn = function(param) {
    console.log('Função padrão de callback')
    console.log(param)
}

//fn(30)

teste(fn)