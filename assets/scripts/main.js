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

var currentSlider = document.getElementById("volume-slider");
var currentVolume = document.getElementById("volume-number");
var soundVersion = document.getElementById("horn-sound");
var volumeImage = document.getElementById("volume-image");
var honkButton = document.getElementById("honk-btn");
currentVolume.addEventListener("change", volChange);
currentSlider.addEventListener("change", slideChange);
document.getElementById("party-horn-form").addEventListener("submit", function(event){
   event.preventDefault();
   soundVersion.play();
});
//honkButton.addEventListener("submit", playHonk);

function volChange(){
   
  if(currentVolume.value > 66 && currentVolume.value <= 100){
        soundVersion.volume = currentVolume.value / 100;
        currentSlider.value = currentVolume.value;
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
  }
  else if(currentVolume.value > 33 && currentVolume.value <= 66){
        soundVersion.volume = currentVolume.value / 100;
        currentSlider.value = currentVolume.value;
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
  }
  else if(currentVolume.value > 0 && currentVolume.value <= 33){
        soundVersion.volume = currentVolume.value / 100;
        currentSlider.value = currentVolume.value;
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
  }
  else if(currentVolume.value == 0){
        soundVersion.volume = currentVolume.value / 100;
        currentSlider.value = currentVolume.value;
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
  }
}

function slideChange(){
   
  if(currentSlider.value > 66 && currentSlider.value <= 100){
        soundVersion.volume = currentSlider.value / 100;
        currentVolume.value = currentSlider.value;
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
        honkButton.disabled = false;
  }
  else if(currentSlider.value > 33 && currentSlider.value <= 66){
        soundVersion.volume = currentSlider.value / 100;
        currentVolume.value = currentSlider.value;
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
        honkButton.disabled = false;
  }
  else if(currentSlider.value > 0 && currentSlider.value <= 33){
        soundVersion.volume = currentSlider.value / 100;
        currentVolume.value = currentSlider.value;
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkButton.disabled = false;
  }
  else if(currentSlider.value == 0){
        soundVersion.volume = currentSlider.value / 100;
        currentVolume.value = currentSlider.value;
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkButton.disabled = true;
  }
}

//LAB MAKEUP ADDITIONS

document.getElementById("log-btn").addEventListener("click", logTest);

function logTest(){
   console.log("Log Test Passed");
}

document.getElementById("error-btn").addEventListener("click", errorTest);

function errorTest(){
   console.error("Error Button Pushed");
}

document.getElementById("table-btn").addEventListener("click", tableTest);

function tableTest(){
   console.table([
   {
    subject: 'CSE',
    code: '110',
   },
   {
    subject: 'CSE',
    code: '30',
   },
   {
    subject: 'CHEM',
    code: '168',
   }
 ]);
}

document.getElementById("dir-btn").addEventListener("click", dirTest);

function dirTest(){
   console.dir(document.head);
}

document.getElementById("dirxml-btn").addEventListener("click", dirxmlTest);

function dirxmlTest(){
   console.dirxml(document);
}

document.getElementById("group-btn").addEventListener("click", groupTest);

function groupTest(){
   const famous = 'Famous Actor Names';
   console.group(famous);
   console.info('Arnold Schwarzeneggar');
   console.info('Tom Cruise');
   console.info('Robert Downey Jr.');
   console.groupEnd(famous);
}

document.getElementById("time-btn").addEventListener("click", timeTest);

function timeTest(){
   console.time();
   for (var i = 0; i < 50000; i++) {
      let j = i + 2;
   }
   console.timeEnd();
}

document.getElementById("trace-btn").addEventListener("click", traceTest);

function traceTest(){
   const charmander = () => { bulbasaur(); };
   const bulbasaur = () => { squirtle(); };
   const squirtle = () => { pikachu(); };
   const pikachu = () => { console.trace(); };
   charmander();
}

try{
   alert('Start of try');
   volModifier;
   alert('End of try');
}
catch(err){
   alert(err);
}

class OutOfBoundsError extends Error{
 constructor(message) {
    super(message);
    this.name = "OutOfBoundsError";
 }
}

currentVolume.addEventListener("change", boundCheck);

function boundCheck(){
   if(currentVolume.value > 100){
      throw new OutOfBoundsError("Error: Volume set to over 100);
   }
}
                                 
