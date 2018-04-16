var codigo = document.getElementById('cp');
var password = document.getElementById('pass1');
var password2 = document.getElementById('pass2');
var cod = /^\d{4}-\d{3}\g/;
var cod1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;


function validatecp() {

    if (!(codigo.value).match(cod)) {

        alert("Código Postal Incorreto");
        return false;

    } else {

        return true;

    }

}

function validatePw() {

    if (!(password.value).match(cod1)) {

        alert("Maiusculas <-> Minusculas <-> Números num total de 8 caracteres");
        return false;
    } else {
        return true;
    }


}

