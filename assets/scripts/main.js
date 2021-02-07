// main.js

// TODO

var soundImg = document.getElementById("sound-image");
document.getElementById("radio-air-horn").addEventListener("click", radAir);

function radAir(){
soundImg.src = "./assets/media/images/air-horn.svg";
document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}

document.getElementById("radio-car-horn").addEventListener("click", radCar);

function radCar(){
soundImg.src = "./assets/media/images/car.svg";
document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}

document.getElementById("radio-party-horn").addEventListener("click", radParty);

function radParty(){
soundImg.src = "./assets/media/images/party-horn.svg";
document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}
   
/*
document.getElementById("honk-btn").addEventListener("submit", function(event){
   event.preventDefault()
});
*/

var currentSlider = document.getElementById("volume-slider");
var currentVolume = document.getElementById("volume-number");
var soundVersion = document.getElementById("horn-sound");
var soundImage = document.getElementById("sound-image");
currentVolume.addEventListener("input", volChange);


function volChange(currentVolume){
   
  if(currentVolume.value > 66 && currentVolume.value <= 100){
        soundVersion.value = currentVolume.value;
        currentSlider.value = currentVolume.value;
        soundImage.src = "./assets/media/icons/volume-level-3.svg";
  }
  else if(currentVolume.value > 33 && currentVolume.value <= 66){
        soundVersion.value = currentVolume.value;
        currentSlider.value = currentVolume.value;
        soundImage.src = "./assets/media/icons/volume-level-2.svg";
  }
  else if(currentVolume.value > 0 && currentVolume.value <= 33){
        soundVersion.value = currentVolume.value;
        currentSlider.value = currentVolume.value;
        soundImage.src = "./assets/media/icons/volume-level-1.svg";
  }
  else if(currentVolume.value == 0){
        soundVersion.value = currentVolume.value;
        currentSlider.value = currentVolume.value;
        soundImage.src = "./assets/media/icons/volume-level-0.svg";
  }
}

