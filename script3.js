
var click=0;
var firstNr;
var secondNr;
var match=0;
var timer;
var numbers=[1,4,2,6,3,5,8,7,7,1,4,6,8,3,2,5];
function card(number){
    if (click == 2){
        return;
    }
    if (click == 0){
        firstNr=number;
        document.getElementById(firstNr).style.fontSize="35px";
        document.getElementById(number).innerHTML=numbers[number];
        click=1;
    }
    else{
        click=2;
        secondNr=number;
        document.getElementById(secondNr).style.fontSize="35px";
        document.getElementById(number).innerHTML=numbers[number];
        timer=setInterval("check()",1000);

    }
}
function check(){
    clearInterval(timer);
    click=0;
    if (numbers[firstNr] == numbers[secondNr]){
        match++;
        document.getElementById("matches").innerHTML=match;
        var lin= document.getElementsByClassName("link")
        lin[firstNr].style.pointerEvents="none";
        lin[secondNr].style.pointerEvents="none";
    }
    else{
        document.getElementById(firstNr).style.fontSize="0";
        document.getElementById(secondNr).style.fontSize="0";
        return;
    }
}
