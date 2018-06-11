let animationFrame = document.querySelector("#animationFrame");
let title = document.querySelector("#title");
let wall = document.querySelector("#wall");
let door = document.querySelector("#door");
let doorHandle = document.querySelector("#doorHandle");
let ppl = document.querySelector("#ppl");
let hat = document.querySelector("#hat");
let harry = document.querySelector("#harry");
let professor = document.querySelector("#professor");
let dumbledore = document.querySelector("#dumbledore");
let snape = document.querySelector("#snape");
let harryScene = document.querySelector("#harryScene");
let hatTalk = document.querySelector("#hatTalk");
let introMusic = document.querySelector("#introMusic");
let gryffindorSound = document.querySelector("#gryffindorSound");
let snapeSound = document.querySelector("#snapeSound");
let dumbledoreSound = document.querySelector("#dumbledoreSound");
let doorOpenMusic = document.querySelector("#doorOpenMusic");
let doorCreakSound = document.querySelector("#doorCreakSound");
let applauseSound = document.querySelector("#applauseSound");
let hagridSound = document.querySelector("#hagridSound");
let playButton = document.querySelector("#playButton");
let candleLit = document.querySelector("#candleLit");
let candleBlown = document.querySelector("#candleBlown");
let candleSound = document.querySelector("#candleSound");
let lightningSound = document.querySelector("#lightningSound");
let arrowCandle = document.querySelector("#arrowCandle");

let arrowSnape = document.querySelector("#arrowSnape");
let arrowDumbledore = document.querySelector("#arrowDumbledore");
let arrowHat = document.querySelector("#arrowHat");


playButton.addEventListener("click", startAnimation);

var snapeIsClicked = false;
var dumbledoreIsClicked = false;
var candleIsClicked = false;







/* document.addEventListener("DOMContentLoaded", startAnimation); */



function startAnimation(){
  playButton.remove();
  lightningSound.play();
  introMusic.play();
  console.log("Hey its Loads");
  title.classList.add("titleLoad");
  title.addEventListener("animationend", removeTitle);
  setTimeout(doorOpen, 7000);
  setTimeout(playDoorSound, 5800);
}

function playDoorSound () {
  doorCreakSound.play();
}

function removeTitle () {

  title.remove();
}

function doorOpen () {
  door.classList.add("doorOpen");

  introMusic.pause();
  doorOpenMusic.play();
  doorHandle.remove();
  door.addEventListener("animationend", removeDoor);
}

function removeDoor () {
  door.remove();
  wall.remove();

  animationFrame.classList.add("frame2");

  animationFrame.addEventListener("animationend", showPeople);

}


function showPeople () {
  lightningSound.pause();
  doorCreakSound.pause();
  candleLit.style.visibility = "visible";
  arrowHat.style.display = "block";

  hat.style.cursor = "pointer";
  hat.classList.add("showHat");
  hat.addEventListener("click", putHatOnHead);

  ppl.classList.add("showPpl");
  /* show harry too */
  harry.classList.add("showHarry");
  /* show professor too */
  professor.classList.add("showProfessor");
  /* show candle too */
  /* show snape too */
  snape.classList.add("showSnape");
  /* show dumbledore too */
  dumbledore.classList.add("showDumbledore");
}

function putHatOnHead () {
  hat.classList.add("putHatOnHead");
  console.log("hat should move");
  professor.classList.add("rotateProfessor");
  hat.style.cursor = "default";
  setTimeout(harryFaceScene, 2000);
  arrowHat.remove();

}

function hidePeople () {
  hat.classList.add("hide");
  ppl.classList.add("hide");
  /* show harry too */
  harry.classList.add("hide");
  /* show professor too */
  professor.classList.add("hide");
  /* show candle too */
  /* show snape too */
  snape.classList.add("hide");
  /* show dumbledore too */
  dumbledore.classList.add("hide");
  candleLit.style.display = "none";

}

function unhidePeople () {
  hat.classList.add("show");
  ppl.classList.add("show");
  /* show harry too */
  harry.classList.add("show");
  /* show professor too */
  professor.classList.add("show");
  /* show candle too */
  /* show snape too */
  snape.classList.add("show");
  /* show dumbledore too */
  dumbledore.classList.add("show");
  candleLit.style.display = "block";
}

function harryFaceScene () {
  hidePeople();
  gryffindorSound.play();
  harryScene.classList.add("show");
  hatTalk.classList.add("hatTalk");
  setTimeout(endScene, 7000);
  setTimeout(applausing, 5300);
}

function applausing() {
  applauseSound.play();
}

function endScene () {
  candleLit.addEventListener("click", blowCandle);
  hatTalk.remove();
  harryScene.remove();
  unhidePeople();
  snape.addEventListener("click", playSnape);
  dumbledore.addEventListener("click", playDumbledore);
  ppl.classList.add("crowdShake");
  hagridSound.play();
  dumbledore.style.cursor = "pointer";
  snape.style.cursor = "pointer";
  candleLit.style.cursor = "pointer";
  arrowDumbledore.style.display = "block";
  arrowSnape.style.display = "block";
  arrowCandle.style.display = "block";


}

function playSnape () {
  snape.classList.add("snapeTalk");
  console.log("snape clicked");
  snapeSound.play();
  snape.style.cursor = "default";
  arrowSnape.remove();
  snapeIsClicked = true;
  if (dumbledoreIsClicked && candleIsClicked) {
    setTimeout(finalScene, 4000);
  }
}

function playDumbledore () {
  dumbledore.classList.add("dumbledoreTalk");
  console.log("dumbledore clicked");
  dumbledoreSound.play();
  dumbledore.style.cursor = "default";
  arrowDumbledore.remove();
  dumbledoreIsClicked = true;
  if (candleIsClicked && snapeIsClicked) {
    setTimeout(finalScene, 4000);
  }

}

function blowCandle () {
  candleLit.classList.add("hide");
  candleBlown.classList.add("show");
  candleSound.play();
  candleIsClicked = true;
  arrowCandle.remove();
  if (dumbledoreIsClicked && snapeIsClicked) {
    setTimeout(finalScene, 4000);
  }


}

function finalScene () {
  animationFrame.remove();
  doorOpenMusic.pause();
}








/* function scene1start (){
  animationFrame.classList.add("title");
  console.log("Hey");
  animationFrame.addEventListener("animationend", scenes[1]);
}


 animationFrame.addEventListener("animationend", scenes[2]);
function scene2start (){
  animationFrame.classList.add("idea");
  console.log("Hey");
  animationFrame.addEventListener("animationend", scenes[2]);
}


function scene3start (){
  animationFrame.classList.add("blowup");
  console.log("Hey");
  animationFrame.addEventListener("animationend", scenes[3]);

}

function scene4start (){
  animationFrame.classList.add("podium");
  console.log("Hey");
  animationFrame.addEventListener("animationend", scenes[4]);

}

function scene5start (){
  animationFrame.classList.add("pop");
  console.log("Hey");
  animationFrame.addEventListener("animationend", end );

  function end (){
    }
} */
