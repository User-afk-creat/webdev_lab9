function init(){
    var entryInput = document.getElementById('entryinput');
    var entryButton = document.getElementById('entrybutton');
    var textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', function() {
    var inputValue = entryInput.value;
    alert("Student: " + inputValue);
    textOutput.innerHTML = inputValue;
  });


}

window.addEventListener('load', init);