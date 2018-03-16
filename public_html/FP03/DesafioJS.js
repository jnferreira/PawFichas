var height = document.getElementById('customHeight');
var weight = document.getElementById('customWeight');
var imc = 0;
var btn = document.querySelector('button');
var imagem = document.getElementById('image1');
var txt = document.querySelector('p');

var imagens = {
    gordo: "http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2017/11/homem-pesado-obeso-gordo.jpg",
    magro: "https://pbs.twimg.com/profile_images/480884012114669569/OKAaxfVz_400x400.jpeg",
    bom: "https://pbs.twimg.com/profile_images/480884012114669569/OKAaxfVz_400x400.jpeg"
};

btn.addEventListener('click', updateBtn);



function updateBtn() {

    imc = weight.value / Math.pow(height.value, 2);

    if (0,00207 < imc < 0,00264) {
        imagem.src = imagens.bom;
    } else if (imc >= 0,00264) {
        imagem.src = imagens.gordo;
    } else if (imc < 0,00207) {
        imagem.src = imagens.magro;
    }else {
        //imagem.src = imagens.magro;
    }



    txt.textContent = `IMC:  ${imc}`;
}