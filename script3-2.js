
var click=0;
var firstNr;
var secondNr;
var match=0;
var timer;
var backimag="back.jpg";
var disney=['1.jpg','4.jpg','2.jpg','6.jpg','3.jpg','5.jpg','8.jpg','7.jpg',
            '7.jpg','1.jpg','4.jpg','6.jpg','8.jpg','3.jpg','2.jpg','5.jpg' ];

function card(imag){
    if (click == 2){
        return;
    }
    if (click == 0){
        firstNr=imag;
        document.images[imag].src=disney[imag];
        click=1;
    }
    else{
        click=2;
        secondNr=imag;
        document.images[imag].src=disney[imag];
        timer=setInterval("check()",1000);

    }
}
function check(){
    clearInterval(timer);
    click=0;
    if (disney[firstNr] == disney[secondNr]){
        match++;
        document.getElementById("matches").innerHTML=match;
        var lin= document.getElementsByClassName("link")
        lin[firstNr].style.pointerEvents="none";
        lin[secondNr].style.pointerEvents="none";
    }
    else{
        document.images[firstNr].src=backimag;
        document.images[secondNr].src=backimag;
        return;
    }
}
