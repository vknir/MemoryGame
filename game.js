

const colorArray=["red","blue","green","yellow"];
var stack=[];
var pickedColor=[];
var count=0;
var toggle=true;
var level=0;

function startOver(){
    count=0;
    stack=[];
    toggle=true;
    
}

function animatePress(userChosenColor){
    $("#"+userChosenColor).addTemporaryClass("pressed",100);
}

function playSound(userChosenColor){
    let sound= new Audio("sounds/"+userChosenColor+".mp3");
    sound.play();
    
}



