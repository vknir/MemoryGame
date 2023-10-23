function checkSequence(index) {
    if (pickedColor[index] === stack[index]) {
        if (pickedColor.length === stack.length) {

            setTimeout(function () {
                nextSequenece();
            }, "1000");
        }
    }
    else {
        $("body").addTemporaryClass("game-over", 200);
        var sound = new Audio("sounds/wrong.mp3");
        sound.play();
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
