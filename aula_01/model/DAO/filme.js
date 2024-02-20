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

//1 Listar todos os filmes existentes na tabela
const selectAllfilmes = async function(){
   try {
        let sql = 'select * from tbl_filmes'
        let rsFilmes = await prisma.$queryRawUnsafe(sql)
        return rsFilmes
   } catch (error) {
        return false
   }
}

// Filtrar os filmes pelo nome
const filtrarFilmes = async function(variavelFilme){
    let sql = 'select * from tbl_filmes where nome like'+ '%'+ variavelFilme +'%'
    let rsFiltroFilmes = await prisma.$queryRawUnsafe(sql)
    if(rsFiltroFilmes.length > 0)
        return rsFiltroFilmes
    else
        return false

}

//3 Selecionar um filme existente filtrando pelo ID
const selectByIdfilme = async function(id){

    try {
        // Realiza a busca do filme pelo id
        var sql = `select * from tbl_filmes where id=${id}`
        // Executa no banco de dados o script sql / $queryRawUnsafe -> get
        let rsBuscarFilmes = await prisma.$queryRawUnsafe(sql)
        return rsBuscarFilmes
        
    } catch (error) {
        return false
    }
}

module.exports = {
    insertfime,
    updateFilme,
    deleteFilme,
    selectAllfilmes,
    selectAllfilmes,
    filtrarFilmes,
    selectByIdfilme
}