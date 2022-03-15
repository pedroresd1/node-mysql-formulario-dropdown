const express = require('express');
const sequelize = require('sequelize');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const alunos = require('./models/alunos');
const app = express();

//Handlebars
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Parse application/json
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json())

//Routers
app.get('/', (req, res) => {
    res.send('Bem vindo ao Cadastro de Alunos');
});

app.get('/cad-pessoas', (req, res) => {
    res.render("cad-alunos");
});

app.post('/add-pessoas', (req, res) => {
    alunos.create({
        nome: req.body.nome,
        cor: req.body.cor
    }).then(() => {
        //res.redirect('/list-alunos');
        res.send("Erro: O Aluno não foi cadastado com sucesso." + erro)
    }).catch((erro) => {
        res.send("Erro: O Aluno não foi cadastado com sucesso." + erro)
    });
});

app.listen(8080);