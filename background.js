var color = 'url("shuffle7.jpg")';

setInterval(mijnfunctie, 2000);

function mijnfunctie(){
    var body = document.getElementsByTagName("body")[0];
    var w = window.innerWidth;
    
    if (w > 800) {
        if (color == 'url("fotos/shuffle7.jpg")') {
            color = 'url("fotos/shuffle2.jpg")';
        } else {
        color = 'url("fotos/shuffle7.jpg")';
        }
        body.style.backgroundImage = color;
    } else {
       body.style.background = '#2E2E2E'; 
    }

}