//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─
// Objetivo: Criar a interação com o BD MySql para fazer o crud de filmes
// Data: 30/01/2024
// Autor: Julia Paiva
// Versão: 1.0
//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─

// - Para cada interação com bc cria-se uma função nomeclatura:(nome+scrpt) ex: insertfilme

// importe da biblioteca do prisma cliente
const { PrismaClient } = require ('@prisma/client')
// instanciando o objeto prisma com as caracteristicas do prima client
const prisma = new PrismaClient


//Inserir um novo filme
const insertfime = async function(){

}

//Atualizar um filme existente filtrando pelo ID
const updateFilme = async function(id){

}

//excluir um filme existente filtrando pelo ID
const deleteFilme = async function(id){

}

//Listar todos os filmes existentes na tabela
const selectAllfilmes = async function(){
  
    // Script sql para listar todos os registros 
    let sql = 'select * from tbl_filmes'

        // rs -> resultado, recordset
        // $queryRowUnsafe  encaminha apenas a variavel:  $queryRowUnsafe(sql)
        // $queryRow        encaminha o script:           $queryRow('select * from tbl_filmes')    tem q andar o sqcrpt sql dentro das aspas

    // Executa o script sql no banco de dados e recebe o retorno dos dados na variavel rsFilmes
    let rsFilmes = await prisma.$queryRawUnsafe(sql)

    // Tratamento de erro para retornar os dados ou retornar falso
    if(rsFilmes.length > 0)
        return rsFilmes
    else
        return false

}

// Filtrar os filmes pelo nome
const filtrarFilmes = async function(variavelFilme){
    let sql = 'select * from tbl_filmes were nome like'+ '%'+ variavelFilme +'%'
    let rsFiltroFilmes = await prisma.$queryRawUnsafe(sql)
    if(rsFiltroFilmes.length > 0)
        return rsFiltroFilmes
    else
        return false


}

//Selecionar um filme existente filtrando pelo ID
const selectByIdfilme = async function(id){

}
module.exports = {
    insertfime,
    updateFilme,
    deleteFilme,
    selectAllfilmes,
    selectAllfilmes,
    filtrarFilmes
}