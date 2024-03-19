/*━━━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━━━━
   Objetivo: Criar a interação com o BD MySql para fazer o crud de filmes
   Data: 30/01/2024
   Autor: Julia Paiva
   Versão: 1.0
━━━━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━━━━*/

// - Para cada interação com bc cria-se uma função nomeclatura:(nome+scrpt) ex: insertfilme

// importe da biblioteca do prisma cliente
const { PrismaClient } = require ('@prisma/client')
// instanciando o objeto prisma com as caracteristicas do prima client
const prisma = new PrismaClient


//1 Listar todos os filmes existentes na tabela
const selectAllfilmes = async function(){
   try {
        let sql = 'select * from tbl_filmes order by id desc'
        let rsFilmes = await prisma.$queryRawUnsafe(sql)
        return rsFilmes
   } catch (error) {
        return false
   }
}

//2 Filtrar os filmes pelo nome
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

//4 Inserir um novo filme
const insertfilme = async function(dadosfilme){

    try {

        let sql
        
        if (dadosfilme.data_relancamento == null || dadosfilme.data_relancamento =='' || dadosfilme.data_relancamento == undefined) {

            sql = `insert into tbl_filmes (
                nome,
                sinopse,
                data_lancamento,
                data_relancanto,
                duracao,
                foto_capa,
                valor_unitario
            ) values (
                '${dadosfilme.nome}',
                '${dadosfilme.sinopse}',
                '${dadosfilme.data_rancamento}',
                null,
                '${dadosfilme.ducacao}',
                '${dadosfilme.foto_capa}',
                '${dadosfilme.valor_unitario}',
            )`
            
        }else{

            sql = `insert into tbl_filmes (
                nome,
                sinopse,
                data_lancamento,
                data_relancanto,
                duracao,
                foto_capa,
                valor_unitario
            ) values (
                '${dadosfilme.nome}',
                '${dadosfilme.sinopse}',
                '${dadosfilme.data_rancamento}',
                '${dadosfilme.data_relancamento}',
                '${dadosfilme.ducacao}',
                '${dadosfilme.foto_capa}',
                '${dadosfilme.valor_unitario}',
            )`
        }

        // executa o sript sql no bd, devemos usar o comndio execute e nao o query
        // o omando execute deve ser utulizado pra insert update e delete
        let rsInserirfilmes = await prisma.$executeRawUnsafe(sql)
        //validação para veridicar se o insert funcionou no bd
        if(rsInserirfilmes)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

//5 Seleciona o ultimo filme adicionado
const selectUltimofilme = async function(id){

    try {

        let sql = 'select cast(last_insert_id() as DECIMAL) as id from tbl_filme limit 1'
    
        let rsFilmes = await prisma.$queryRawUnsafe(sql)
    
        return rsFilmes
        
    } catch (error) {
        return false
    }
}

//6 Atualizar um filme existente filtrando pelo ID
const updateFilme = async function(id){

    try {
        
        let sql
           
        sql = `update into tbl_filmes set
        nome ="${dadosfilme.nome}",
        sinopse ="${dadosfilme.sinopse}",
        data_lancamento ="${dadosfilme.data_lancamento}",
        data_relancanto ="${dadosfilme.data_rancamento}",
        duracao ="${dadosfilme.duracao}",
        foto_capa ="${dadosfilme.foto_capa}",
        valor_unitario ="${dadosfilme.valor_unitario}" 
        where id=${id}`

        let rsInserirfilmes = await prisma.$executeRawUnsafe(sql)

        if(rsInserirfilmes)
            return true
        else
            return false

    } catch (error) {
        return false
    }

}

//7 Excluir um filme existente filtrando pelo ID
const deleteFilme = async function(id){

    try {
        var sql = `delete * from tbl_filmes where id=${id}`
        let rsBuscarFilmes = await prisma.$queryRawUnsafe(sql)
        return rsBuscarFilmes

    } catch (error) {
        return false
    }

}

module.exports = {
    insertfilme,
    updateFilme,
    deleteFilme,
    selectAllfilmes,
    filtrarFilmes,
    selectUltimofilme,
    selectByIdfilme
}