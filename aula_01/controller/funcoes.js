var dados = require('../modulo/filmes')

const getListaDeFilmes = function(){

    const info = dados.filmes
    let filmesA = []
    let filmesJ = {}

    info.forEach((dados)=>{
        let dadosFinais = {
            nome: dados.nome
        }
        filmesA.push(dadosFinais)
    })

    filmesJ.dados = filmesA
    filmesJ.dados = info.length

    console.log(filmesA)

}
getListaDeFilmes()

module.exports = {
    getListaDeFilmes
}

