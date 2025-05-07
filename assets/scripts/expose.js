// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti()
  let confetti = false;
  let selectHorn = document.getElementById("horn-select");
  let image =  document.querySelectorAll("img");
  let audio = document.querySelector("audio");
  selectHorn.addEventListener("change", function() {
    let horn = selectHorn.value;
    if(horn == "party-horn") {
      confetti = true;
    } else {
      confetti = false;
    }
    image[0].src = "assets/images/" + horn + ".svg";
    audio.src = "assets/audio/" + horn + ".mp3";
  })

  let selectVolume = document.getElementById("volume"); 
  selectVolume.addEventListener("input", function() {
    let volume = selectVolume.value;
    audio.volume = volume / 100;
    if(volume == 0) {
      image[1].src = "assets/icons/volume-level-0.svg";
    }
    if((volume >= 1) && (volume < 33)) {
      image[1].src = "assets/icons/volume-level-1.svg";
    }
    if((volume >= 33) && (volume < 67)) {
      image[1].src = "assets/icons/volume-level-2.svg";
    }
    if(volume >= 67) {
      image[1].src = "assets/icons/volume-level-3.svg";
    }
  })

  let button = document.querySelector("button");
  button.addEventListener("click", function() {
    audio.play();
    if(confetti) {
      jsConfetti.addConfetti();
    }
  })
}