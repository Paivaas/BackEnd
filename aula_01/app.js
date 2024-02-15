//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─
//
//
//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─
// Para realizar a conexão com o BD preicamo utiliazr uma dependencia:
// - SEQUELIZE ORM Possui diversas vulnerabilidades (É antigo). x
// - PRISMA    ORM Permite uma melhor interação com o banco    ✔
// - FASTFY    ORM                                             ✔

//para utilizar o prisma precisamos instalr as seguintes dependencias
// Prisma instalação: npm install prisma --save (Na pasta raiz - APP)
// Prisma:            npm install @prisma/client --save
// * Apos a instalação dos prisma devemos rodar o coamndo abaixo para inicializar o prisma:
// Prisma:            npx prisma init


// importando....................
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Objeto que vai manipular as restrições
const app = express()

//Manipulando as restrições da API
app.use((request, response, next)=>{
    // Quem  vai acessar a API
    response.header('Access-Control-Allow-Origin', '*')
    // como a API vai ser requisitada 
    response.header('Access-Control-Allow-Methods', 'GET')
    // Ativa as configurações de permissoe do Cors
    app.use(cors())

    next();
})

// ⊱✿⊰━━━━━━── Imports de arquivos e bibliotecas do projeto ─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─
const controleFIlmes = require('./controller/controller_filme.js')

// ⊱✿⊰━─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─


//Endpoint
app.get('/v1/AcmeFilmes/filmes', cors(), async function(request, response, next){
    let controleFIlmes = require('./controller/funcoes')
    let listaFilmes = controleFIlmes.getListaDeFilmes();

    if(listaFilmes){
        response.json(listaFilmes)
        response.status(200)

    }else
        response.status(400)
});


app.get('/v2/acmeFilmes/filmes', cors(), async function(request, response, next){

    //chama a função para rtornar os dados filme
     let dadosFilmes = await controleFIlmes.getListarFilmes()

     // validação para verificar se existem dados
     if(dadosFilmes){
        response.json(dadosFilmes)
        response.status(200)
     }else{
        response.json({message: 'Nenhum registro encontrado'})
        response.status(440)
     }


})
// EndPoint listar filmes
app.get('/v1/acmeFilmes/filmes/filtro?', cors(), async function(request, response, next){


    const nome = request.query.nome
    console.log(nome)
    //chama a função para rtornar os dados filme
     let dadosFilmes = await controleFIlmes.getFiltroFilmes(nome)

     // validação para verificar se existem dados
     if(dadosFilmes){
        response.json(dadosFilmes)
        response.status(200)
     }else{
        response.json({message: 'Nenhum filme encontrado'})
        response.status(440)
     }


})


app.listen('8080', function(){
    console.log('API funcionando! ✿ ')
})