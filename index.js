//detecting button press
var drumNo=document.querySelectorAll(".drum").length;


for(var i =0; i<drumNo; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){

  var buttonInner=this.innerHTML;
  makesound(buttonInner);
  buttonAnimation(buttonInner);

});
}

// detecting keypress 
document.addEventListener("keypress",function(event) {
  makesound(event.key);
  buttonAnimation(event.key);
});
f
function makesound(key){
  switch (key) {

    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
       var tom2 = new Audio("sounds/tom-2.mp3");
       tom2.play();
       break;
 
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;
 
 
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
 
 
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
 
 
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
 
 
    case "l":
      var snare= new Audio("sounds/snare.mp3");
      snare.play();
      break;
 
      default:console.log();
 
    }
}

function buttonAnimation(currentKey){

  var activeKey= document.querySelector("."+ currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);
 
} 