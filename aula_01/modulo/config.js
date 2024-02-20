
//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─
// Arquivo responsavel pelas configurações globais de mensagens, valores e conteudo para o projeto
// Data: 20/02/2024
// Autor Julia Pava
// Versão 1.0
//─━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━──━━━━━━⊱✿⊰━━━━━━─

// MENSAGENS DE ERRO

 const ERROR_INVALID_ID = {status: false, status_code: 400, message: 'O Id encamnhado na requisição não é valido! ✿'}
 const ERROR_NOT_FOUND = {status: false, status_code: 440, message: 'Nenhum item encontrado na requisição! ✿'}
 const ERROR_INTERNAL_SERVER_DB = {status: false, status_code: 500, message: 'Ocorreram erros internos no servidor de banco de dados. Por favor contate o administrador do sistema! ✿'}

 module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB
 }