$(".btn").on("click", function (event) {

    var userChosenColor = $(this).attr('id');

    if (userChosenColor === "red")
        pickedColor.push(0);
    else if (userChosenColor === "blue")
        pickedColor.push(1);
    else if (userChosenColor === "green")
        pickedColor.push(2);

    else
        pickedColor.push(3);

    level++;



    playSound(userChosenColor);

    animatePress(userChosenColor);


    checkSequence(pickedColor.length - 1);

});


$(document).keypress(function(){
    if(toggle){
        nextSequenece();
        toggle=false;
    }
});