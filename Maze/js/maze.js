"use strict";

(function maze()
{

$(document).ready(function() {
 $(".boundary").mouseover(boundarycross); //trigger boundrycross if we hit a wall
    $("#maze").mouseleave(boundarycross); //trigger boundrycross if we exit the maze div
    $("#end").mouseover(win);//trigger the win function when we reach the end of the maze
    $("#start").click(reset); //start a new maze round
});
var crossed = false;
var started = false;
    
var  boundarycross =
function () {
    if(!crossed && started) { //only set you lose if we have started and haven't crossed yet
    $(".boundary").addClass("youlose");
        $("#status").text("Game Over!");
        crossed = true;
        started=false;
    }
};

var win =
    function () {
        if(started && !crossed) { //only resolve the game if we have started
                $("#status").text("You win");
        started = false; //end the game
        }
    };

var reset =
    function(){
        $(".boundary").removeClass("youlose");
        $("#status").text("Good luck"); //to prevent the maze from jumping up
        crossed = false;
        started = true;
    };
})();
 










