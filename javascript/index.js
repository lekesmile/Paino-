/*jshint esversion: 6 */


//Below line listern to keyboardevents
document.addEventListener("keydown", myfunction);


//Click events by selecting the .key class
soundclick = document.querySelectorAll('.key');
for (var i = 0; i < soundclick.length; i++) {
  soundclick[i].addEventListener('click' , clickFunction);
}

// This function is for the keyboardevents

function myfunction(event){
  // above es2015 formate works exactly thesame as below ES6
  var audio = document.querySelector("audio[data-key=\"" + event.keyCode + "\"]");
  var key = document.querySelector(".key[data-key=\"" + event.keyCode + "\"]");

  // Below is es6 function
  // var audio =document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // var key =document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(event);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

// This function is for the Clickevents

function clickFunction(event){
  var audio = document.querySelector("audio[data-key=\"" + event.target.innerHTML.charCodeAt(0) + "\"]");
  var key = document.querySelector(".key[data-key=\"" + event.target.innerHTML.charCodeAt(0) + "\"]");

  // Below is es6 function
  // var audio =document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // var key =document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(event);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

}


// This function add and remove the play effects

function revertStyle(event) {
    if (event.propertyName !== 'transform') {
        this.classList.remove('playing');
    }
}



var keys = document.querySelectorAll('.key');
  for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('transitionend', revertStyle);

  }

//* Below is another way to loop through an array of keys *
//* Works exactly the same as above loop *

// var keys = document.querySelectorAll('.key');
// keys.forEach(key => {
//     key.addEventListener('transitionend', revertStyle);
// });
