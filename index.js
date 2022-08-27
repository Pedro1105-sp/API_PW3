const express = require('express');

const app = express();

app.get('/HomePage', (req, res)=>{
    console.log('LOJA DE CARRS');
    res.send('EM CONSTRUCAO🚗');

})

app.listen(3000, ()=>{
    console.log(' Servidor rodando em: http://localhost:3000');
});