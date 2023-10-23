function nextSequenece() {

    count++;
    level = 0;
    pickedColor = [];
    $("h1").text("Level " + count);
    var randomNumber = Math.floor(Math.random() * 4);

    var choosencolor = colorArray[randomNumber];

    stack.push(randomNumber);

    console.log(stack);


    var choosenColor = colorArray[randomNumber];


    $("#" + choosenColor).fadeOut(100).fadeIn(100);
    let sound = new Audio('sounds/' + choosenColor + '.mp3');
    sound.play();

}
