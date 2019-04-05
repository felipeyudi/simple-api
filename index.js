const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

app.get('/teste', function(request, response) {
    console.log('request recebido em Teste');
    response.send("OK.");
});

app.get('/salvar', function(request, response) {
    console.log("acessou a pagina salvar");
    response.send("<p>Exemplo com XUXA</p><p>exemplo 2</p>");
});