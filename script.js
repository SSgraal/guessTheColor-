function makeColourValue() {
    return Math.round(Math.random() * 255);
  }
  
  function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
      'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
    );
  }
  
  
  
  var buttons = document.getElementsByClassName('colorButton');
  
  var heading = document.getElementById('colorValue');
  
  var answerMessage = document.getElementById('answer');

  var resetButton = document.getElementById('resetButton');

  var body = document.getElementsByTagName("body");
  
  resetButton.addEventListener('click', startGame);
  
  function startGame(){
      answerMessage.innerHTML = "";  
      var answerButton = Math.round(Math.random() * (buttons.length - 1));
      
      
      for (var i = 0; i < buttons.length; i++) {
          
          var red = makeColourValue();
          var green = makeColourValue();
          var blue = makeColourValue();
          
          setButtonColour(buttons[i], red, green, blue);
          
          if (i === answerButton) {
              heading.innerHTML =`(${red}, ${green}, ${blue})`;
            }
            
            buttons[i].addEventListener('click', function(){
                if (this === buttons[answerButton]) {
                    answerMessage.innerHTML = "Correct!";
                    setButtonColour(body, red, green, blue);
                } else {
          answerMessage.innerHTML = "Incorrect, try again!";
        }
    });
    
}
}
startGame();