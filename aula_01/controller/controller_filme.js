//•*´¨`*•...•*´¨`*•...•*´¨`*•...•*•*´¨`*•...•*´¨`*•...•*´¨`*•...•*´¨`*•...•*´¨`*•...•*´¨
// Objetivo: Arquivo responsvel pela interação entre o App e a Model, que teremos todas
//           as tratativas e regras de negocios para o cadrastro para o crud de filmes
// Data: 30/01/2024
// Autor: Julia Paiva
// Versão: 1.0
//•*´¨`*•...•*´¨`*•...•*´¨`*•...•*•*´¨`*•...•*´¨`*•...•*´¨`*•...•*´¨`*•...•*´¨`*•...•*´¨
// Retornar dados get | guardar algo set

// IMporte do arquivo DAo para manipular dados do BD
const filmesDAO = require('../model/DAO/filme.js')


// Função para inserir um filme existente
const setInserirFilme = async function(){

}

// Função para atualizar um filme existente
const setAtulizarFilme = async function(){

}

// função para excluir um filme existente
const setExcluirFilme = async function(){

}

// função para retornar todos os flmes do BD
const getListarFilmes = async function(){

    let filmesJSON = {}

    //Chama a função do DAO para buscar os dados o BD
    let dadosFilmes = await filmesDAO.selectAllfilmes()

    if(dadosFilmes){
        // Montando o JSON para retornar para o aPP
        filmesJSON.filmes = dadosFilmes
        filmesJSON.quantidade = dadosFilmes.length
        filmesJSON.status_code = 200

        //Retorna o json montado
        return filmesJSON
    }else
        return false //return false quando nao houverem daados
}

// função para buscar filme pelo ID
const getBuscarFilme = async function(){

}

// função para filtrar filmes com base nos dados do BD
const getFiltroFilmes = async function(nome){

    let filtroFilmeJSON = {}
    //Chama a função do DAO para buscar os dados o BD
    let dadosFilmes = await filmesDAO.filtrarFilmes(nome)

    if(dadosFilmes){
        // Montando o JSON para retornar para o aPP
        filtroFilmeJSON.filmes = dadosFilmes
        filtroFilmeJSON.quantidade = dadosFilmes.length
        filtroFilmeJSON.status_code = 200

        //Retorna o json montado
        return filtroFilmeJSON
    }else
        return false //return false quando nao houverem daados
}

module.exports = {
    setAtulizarFilme,
    setInserirFilme,
    setExcluirFilme,
    getBuscarFilme,
    getListarFilmes,
    getFiltroFilmes
}