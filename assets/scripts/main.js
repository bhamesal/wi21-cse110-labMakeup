// main.js

// TODO

var currentVolume = document.getElementById("volume-number");
var soundVersion = document.getElementById("horn-sound");
var soundImage = document.getElementById("sound-image");
var soundTypeInput = document.getElementById("radio-air-horn")
currentVolume.addEventListener("input", volChange);
//soundTypeInput.addEventListener("click", typeChange);

function volChange(currentVolume){
  if(currentVolume.value > 66 && currentVolume.value <= 100){
        horn-sound.value = currentVolume.value;
    
  }
  else if(currentVolume.value > 33 && currentVolume.value <= 66){
        horn-sound.value = currentVolume.value;
  }
  else if(currentVolume.value > 0 && currentVolume.value <= 33){
        horn-sound.value = currentVolume.value;
  }
  else if(currentVolume.value == 0){
        horn-sound.value = currentVolume.value;
  }
}
