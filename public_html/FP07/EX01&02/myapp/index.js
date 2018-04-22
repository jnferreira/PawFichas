'use strict';
const express = require('express');
const app = express();
const User = require('./utilizadores');

app.set('view engine', 'jade');
app.set('views', './views');

const utilizadores = [
    new User('Joao', 'qweqwe1', 'zxcczx'),
    new User('Nuno', 'qweqwe2', 'zxcczx'),
    new User('Ferreira', 'qweqwe3', 'zxcczx')
];


app.get('/alunos', (req, res) => {

    if (utilizadores.length != 0) {
        res.status(200).send(utilizadores);
    } else {
        res.status(404).send('Não tem utilizadores');
    }


});

app.get('/jadeLive', (req, res) => {
    res.render('view1', {
        title: 'PAW', messageTitle: 'Jade', messageText: 'Exemplo...', users: utilizadores.get()
    });
});


app.listen(8125, () => {
    console.log('Servidor ativo http://127.0.0.1:8125/');
});