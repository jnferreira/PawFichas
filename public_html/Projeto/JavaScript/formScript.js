var nome = document.getElementById('nome');
var form = document.getElementById('myform').addEventListener("submit", listenSubmit);
var nomeReg = /\s/g;

function listenSubmit() {
    if (!validateName()) {
        document.getElementById("mySubmit").disabled = true;
        $('#mySubmit').hide();
    } else {
        form.submit;
    }
}


function validateName() {

    if (nome.value === "") {

        alert("Nome em Branco");
        $('#mySubmit').fadeOut(3000);
        return false;

    } else if (!(nome.value).match(nomeReg)) {

        alert("Nome Inválido");
        $('#mySubmit').fadeOut(3000);
        return false;

    } else {
        $('#mySubmit').fadeIn(3000);
        return true;
    }

}


