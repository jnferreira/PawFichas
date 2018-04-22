let imagem1 = document.getElementById('image1');
let imagem2 = document.getElementById('image2');
let imagem3 = document.getElementById('image3');
let imagem4 = document.getElementById('image4');
let imagemMain = document.getElementById('imageMain');

$('#image1').on('click', () => {
    imagemMain.src = imagem1.src;
});

$('#image2').on('click', () => {
    imagemMain.src = imagem2.src;
})
$('#image3').on('click', () => {
    imagemMain.src = imagem3.src;
});
$('#image4').on('click', () => {
    imagemMain.src = imagem4.src;
});
$('#image5').on('click', () => {
    imagemMain.src = imagem5.src;
});




