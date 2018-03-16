var nome = document.getElementById('nome');
var email = document.getElementById('email');
var form = document.getElementById('myform');
var formSubmit = form.submit;
var nomeReg = /\s/g;

//Não Está completo - ainda tem bugs

form.onsubmit = function ()
{

    if (!validateName()) {

        document.getElementById("mySubmit").disabled = true;
        alert("Não pode deixar nada em branco");
    }

    document.getElementById("mySubmit").disabled = true;
    form.submit;

};

function validateName() {

    if (nome.value === "") {

        alert("Please fill all fields...!!!!!!");
        return false;

    } else if (!(nome.value).match(nomeReg)) {
        
        alert("Nome Inválido");
        return false;

    } else {
        return true;
    }

}

function validateEmail() {
    if (email.value === "") {
        alert("Não pode deixar o mail em branco");

        return false;
    } else {
        return true;
    }
}




