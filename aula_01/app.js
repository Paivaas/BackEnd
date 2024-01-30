//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─
//
//

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
app.listen('8080', function(){
    console.log('API funcionanod! vish')
})