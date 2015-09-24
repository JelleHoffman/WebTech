var color = 'url("shuffle7.jpg")';

setInterval(mijnfunctie, 7000);

function mijnfunctie(){
    var body = document.getElementsByTagName("body")[0];
    var w = window.innerWidth;
    
    if(w > 800) {
        body.style.backgroundImage = color;
        if (color == 'url("shuffle7.jpg")') {
            color = 'url("shuffle2.jpg")';
        } else {
        color = 'url("shuffle7.jpg")';
        }
    } else {
       body.style.background = '#2E2E2E'; 
    }

}