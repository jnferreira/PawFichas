let height = document.getElementById('customHeight');
let weight = document.getElementById('customWeight');
let imc = 0;
let btn = document.querySelector('button');
let imagem = document.getElementById('image1');
let txt = document.querySelector('p');

let imagens = {
    gordo: "http://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2017/11/homem-pesado-obeso-gordo.jpg",
    magro: "https://pbs.twimg.com/profile_images/480884012114669569/OKAaxfVz_400x400.jpeg",
    bom: "https://pbs.twimg.com/profile_images/480884012114669569/OKAaxfVz_400x400.jpeg"
};

btn.addEventListener('click', updateBtn);

function updateBtn() {

    imc = weight.value / Math.pow(height.value, 2);

    if (0.00207 < imc < 0.00264) {
        imagem.src = imagens.bom;
    } else if (imc >= 0.00264) {
        imagem.src = imagens.gordo;
    } else if (imc < 0.00207) {
        imagem.src = imagens.magro;
    }else {
        //imagem.src = imagens.magro;
    }



    txt.textContent = `IMC:  ${imc}`;
}