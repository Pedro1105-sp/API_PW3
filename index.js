const express = require('express');
const fabricanteController = require("./controller/FabricanteController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log('A REQUISIÇÃO PASSOU PELA INDEX');
app.use("/", fabricanteController);


// app.get('/HomePage', (req, res)=>{
//     console.log('LOJA DE CARRS');
//     res.send('EM CONSTRUCAO🚗');

// })


app.listen(3000, ()=>{
    console.log(' Servidor rodando em: http://localhost:3000');
});