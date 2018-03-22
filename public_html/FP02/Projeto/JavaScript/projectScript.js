var images = new Array('http://www.nina-travels.com/wp-content/uploads/2016/05/madeira-tourist-attractions11.jpg', 'https://i.pinimg.com/originals/6d/a4/91/6da491cf858589d283d0227b04667fa7.jpg', 'http://www.visitmadeira.pt/Files/Images/VisitMadeira/HomeSlideshow/praiapxo_2_1300x440.jpg', 'http://www.inportobay.com/fotos/noticias/lb_hs_mad_picodoareiro_ambiente_7103355445717aca4a3609.jpg');
var nextimage = 0;
var colors = new Array('black', '#cccccc');
var nextcolor = 0;
doSlideshow();
doTrans();

function doSlideshow() {

    if (nextimage >= images.length) {
        nextimage = 0;
    }

    if (nextcolor >= colors.length) {
        nextcolor = 0;
    }

    $('.jumbotron').css('background-image', 'url("' + images[nextimage++] + '")').fadeIn(3000, function () {
        setTimeout(doSlideshow, 3000);
    });

}


