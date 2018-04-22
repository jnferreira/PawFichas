const express = require('express');
const app = express();
const form = require("express-form");
filter = form.filter,
    validate = form.validate;

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('form', {});
});

app.post('/forms', (req, res) => {

    form(
        filter("Nome").trim(),
        validate("Nome").required().is(/^[a-z]+$/),
        filter("Apelido").trim(),
        validate("Apelido").required().is(/^[0-9]+$/),
        filter("email").trim(),
        validate("email").isEmail()

    ),


        function (req, res) {

            if (!req.form.isValid) {

                console.log(req.form.errors);

            } else {

                console.log("Username:", req.form.username);
                console.log("Password:", req.form.password);
                console.log("Email:", req.form.email);
            }

        }

});


app.listen(8125, () => {
    console.log('Servidor ativo http://127.0.0.1:8125/');
});