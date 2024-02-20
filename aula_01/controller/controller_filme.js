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
const message = require('../modulo/config.js')


// Função para inserir um filme existente
const setInserirFilme = async function(){

}

// Função para atualizar um filme existente
const setAtulizarFilme = async function(){

}

// função para excluir um filme existente
const setExcluirFilme = async function(){

}

// ----------------------------------------------------

//1 função para retornar todos os flmes do BD
const getListarFilmes = async function(){

    let filmesJSON = {}

    //Chama a função do DAO para buscar os dados o BD
    let dadosFilmes = await filmesDAO.selectAllfilmes()

    if(dadosFilmes){
       
        if(dadosFilmes.length > 0){
             // Montando o JSON para retornar para o aPP
            filmesJSON.filmes = dadosFilmes
            filmesJSON.quantidade = dadosFilmes.length
            filmesJSON.status_code = 200

            //Retorna o json montado
            return filmesJSON
        }else{
            return message.ERROR_NOT_FOUND
        }
    }else
        return message.ERROR_INTERNAL_SERVER_DB
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

//3 função para buscar filme pelo ID
const getBuscarFilme = async function(id){

    let filmesJson = {}
    // Recebe o id do filme
    let idFilme = id
    if(idFilme == "" || idFilme == undefined || isNaN(idFilme)){
        return message.ERROR_INVALID_ID
    }else{
        // solicita para o dao a busca do flme pelo id
        let dadosfilme = await filmesDAO.selectByIdfilme(idFilme)

        // validar se existem dados no bd foram processados
        if(dadosfilme){
            // validação para verificar se existem dados de retorno
            if(dadosfilme.length > 0 ){
                
                filmesJson.filme = dadosfilme
                filmesJson.status_code = 200

                return filmesJson 
            }else
            return message.ERROR_NOT_FOUND //404
          
        }else{
            return message.ERROR_INTERNAL_SERVER_DB //500
        }
    }
}


module.exports = {
    setAtulizarFilme,
    setInserirFilme,
    setExcluirFilme,
    getBuscarFilme,
    getListarFilmes,
    getFiltroFilmes
}