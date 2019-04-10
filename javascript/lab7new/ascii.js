"use strict"

var animation = "";
var setSpeed = 250;
var timer = "";
var originalText = " ";


function start() {
    document.getElementById("stopbutton").disabled = false;
    document.getElementById("startbutton").disabled = true;
    document.getElementById("animations").disabled = true;

    startAnimation(document.getElementById("animations").value);


}
function stop(){

    clearInterval(timer);
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
    document.getElementById("animations").disabled = false;
    document.getElementById("textarea").value = originalText;

}

function turbo(){
    if(document.getElementById("turbo").checked == true ){
        setSpeed = 50;
    }
    else{
        setSpeed = 250;
    }
    setAnimationType(document.getElementById("animations").value);
}


function setSize(){

    if(document.getElementById("setsize").selectedIndex == 0){
        document.getElementById("textarea").style.fontSize = "7pt"
    }else if(document.getElementById("setsize").selectedIndex == 1){
        document.getElementById("textarea").style.fontSize = "10pt"
    }else if(document.getElementById("setsize").selectedIndex == 2){
        document.getElementById("textarea").style.fontSize = "12pt"
    }else if(document.getElementById("setsize").selectedIndex == 3){
        document.getElementById("textarea").style.fontSize = "16pt"
    }else if(document.getElementById("setsize").selectedIndex == 4){
        document.getElementById("textarea").style.fontSize = "24pt"
    }else {
        document.getElementById("textarea").style.fontSize = "32pt"
    }

}

function setAnimationType(){
    setSize();
    document.getElementById("stopbutton").disabled = false;
    document.getElementById("startbutton").disabled = true;
    document.getElementById("animations").disabled = true;
    // clearInterval(timer);

    originalText = document.getElementById("textarea").value;

    var selectedAnimetion  = document.getElementById("animations").selectedIndex;
    if (selectedAnimetion == 0) {
        document.getElementById("textarea").value = "";

    }else if (selectedAnimetion == 1) {

        startAnimation("Exercise");
    }
    else if (selectedAnimetion == 2) {
        startAnimation("Juggler");
    }
    else if (selectedAnimetion == 3) {
        startAnimation("Bike");
    }
    else if (selectedAnimetion == 4) {
        startAnimation("Dive");
    }
    else  {
        startAnimation("Custom");
    }

}

function startAnimation(animType){
    var str = ANIMATIONS[animType].split("=====\n");
    var x = 0;
    timer  = setInterval(function run(){
        document.getElementById("textarea").value = str[x++];
        if(x >= str.length){
            x = 0;
        }},setSpeed);

}