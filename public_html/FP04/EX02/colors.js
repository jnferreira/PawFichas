var linha1 = document.querySelector('#linha1');
var linha2 = document.querySelector('#linha2');
var linha3 = document.querySelector('#linha3');
var linha4 = document.querySelector('#linha4');

function chageColor(e) {

    var rndCol = 'rgb(' + Math.floor(1 + Math.random() * 255) + ',' + Math.floor(1 + Math.random() * 255) + ',' + Math.floor(1 + Math.random() * 255) + ')';
    e.target.style.backgroundColor = rndCol;

}

linha1.addEventListener('click', chageColor);
linha2.addEventListener('click', chageColor);
linha3.addEventListener('click', chageColor);
linha4.addEventListener('click', chageColor);
