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
// bodyparser define como os dados vão chegar no corpo da mensagem 


// importando....................
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express() //Objeto que vai manipular as restrições
const bodyParserjson = bodyParser.json() // Cria um objeto do tipo json para receber os dados va Body nas requisições POST e PUT


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
// ⊱✿⊰━━━━━━── Imports de arquivos e bibliotecas do projeto ─━━━━━━⊱✿⊰━━━━━━─
const controleFIlmes = require('./controller/controller_filme.js')

// ⊱✿⊰━─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─


//1 EndPoint
app.get('/v2/acmeFilmes/filmes', cors(), async function(request, response, next){

    let dadosFilmes = await controleFIlmes.getListarFilmes()

    response.status(dadosFilmes.status_code)
    response.json(dadosFilmes)

})

//2 EndPoint listar filmes
app.get('/v1/AcmeFilmes/filmes/filtro?', cors(), async function(request, response, next){

    let nome = request.query.nome
    console.log(nome)
    //chama a função para rtornar os dados filme
     let dadosFilmes = await controleFIlmes.getFiltroFilmes(nome)

     // validação para verificar se existem dados
     if(dadosFilmes){
        response.json(dadosFilmes)
        response.status(200)
     }else{
        response.json({message: 'Nenhum filme encontrado'})
        response.status(404)
     }
})

//3 EndPoint retorna os dados do filme pelo id 
app.get('/v2/AcmeFilmes/filme/:id', cors(), async function(request, response, next){

    //  recebe p od da requisição do filme
    let idFilme = request.params.id
    // solicita para a cpntrole r filme pelo id
    let dadosfilme = await controleFIlmes.getBuscarFilme(idFilme)

    response.status(dadosfilme.status_code)
    response.json(dadosfilme)

})

//4 EndPoint que adiciona no banco novos filmes // não esquecer de coocar o bodyparserJson que é qm define o fromato de cheegada dos objetos. OBS: esse objeto foi criado no inicio do projeto
app.get('/v2/AcmeFilmes/filme', cors(), bodyParserjson, async function(request, response, next){

    // recebe os dados encamihados na requisição no body - Vai hegr no padrao json por conta da forma que criamos ele la em cimma 
    let dadosBody = request.body

    //Encaminha os dados da requisição para a cotroler enviar para o banco de dados
    let resultDados = await controleFIlmes.setInserirFilme(dadosBody)

    response.status(resultDados.status_code)
    response.json(resultDados)
})


// Exxecuta Api e faz ela ficar esperando a requisições
app.listen('8080', function(){
    console.log('API funcionando! ✿ ')
})