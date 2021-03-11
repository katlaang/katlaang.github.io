"use strict";

window.onload = function () {
    document.getElementById("startBtn").onclick=start;
    document.getElementById("stopBtn").onclick=stop;
    document.getElementById("animationSelector").onchange=animation;
    document.getElementById("fontSize").onchange=fsize;
    document.getElementById("turbo").onchange=turbo;
    
};
//global variables that we need to use in our functions

var animations=[""];
var timer=null;
var i=0;
var frame="";
var animationOn = false;

function animate() { // this is the function that load the animations from the animation class
    while(animations[i]!="=====" && animations[i] != "") {// we are using separators here to read the next string 
        frame += animations[i] + '\n';
        i++;
    }
    if(i<animations.length-1) {// resets the animation selected to zero so it runs in a loop
        i++;
    } else {
        i=0;
    }
   if(frame!="") {//this code was added because the bike section of the animation file had empty strings in it
       document.getElementById("viewBoard").value= frame;
   } else {
    animate();
   }
    frame = ""; 
}

function start(){// function to start the animation
    if(animationOn==false && animations.length > 1) {//these 3 lines of code were added to stop the start button from adding multiple frames to the animation. Boolean value animationOn ensures starts when frame is empty
        
    animationOn = true;
    frame = "";
    timer = window.setInterval(animate, 250);
       document.getElementById("stopBtn").disabled = false; 
    }
}

function stop() {//animation stop function that resets everything to 0
    clearInterval(timer);
    i=0;
    animationOn = false;
    document.getElementById("stopBtn").disabled = true; 
}

function animation(value) {//loading the ANIMATION script to the window
    var animation = document.getElementById("animationSelector").value;
    animations = ANIMATIONS[animation].split('\n');
 document.getElementById("viewBoard").value = ANIMATIONS[animation];
    i = 0;
}

function turbo() {// sets the turbo to 50ms whn checked, and back to 250ms delay time when unchecked
    clearInterval(timer);
    var turboCheck = document.getElementById("turbo").checked;
    if(turboCheck) {
    timer = setInterval(animate, 50);
    } else {
         timer = setInterval(animate, 250);
    }
}

function fsize() {// set the fontsize selector
    
    var size = document.getElementById("fontSize").value;
   switch(size) {
       case "tiny":
           size = "7pt";
           break;
       case "small":
           size = "10pt";
           break;
       case "medium":
           size = "12pt";
           break;
       case "large":
           size = "16pt";
           break;
       case "exlarge":
           size = "24pt";
           break;
       case "xxl":
           size = "32pt";
           break;
       default:
           size = "12pt";
   }
    document.getElementById("viewBoard").style.fontSize = size;
}