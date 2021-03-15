(function fifteen()
{
    var pos = [];
    var spaceY = 300;
    var spaceX = 300;
    
    // done at page load
    var  init = function() {
        var puzzleArea = $('#puzzlearea');
        var divs = puzzleArea.children('div'); //get all the pieces of the puzzle
        // initialize each piece
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];

            // calculate x and y for this piece
            var x = ((i % 4) * 100) ;
            var y = (Math.floor(i / 4) * 100) ;

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("images/background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y;
            var point = {x:x, y:y , bgP:div.style.backgroundPosition };
            pos.push(point);
        }
    };

    //Shuffle button
        var shuffle  = function () {

        var divs =  $("#puzzlearea").children('div');
        divs.each(
            function () {
                $(this).detach(); // detach each div from the "puzzlearea"
            });

        var posshuff = shuffleArray(pos); //randomize the positions of the divs
        for (var i=0; i< divs.length; i++) {
            var div = divs[i];
            
            div.x = posshuff[i].x;
            div.y = posshuff[i].y;
            div.style.left = div.x + 'px';
            div.style.top  = div.y + 'px';
            div.style.backgroundPosition = div.bgP;
            //reinsert the div back to puzzlearea at different position
            $("#puzzlearea").append(div); 
        }
            
        //Finally move the white space to coordinates x: 300px and y: 300px
            while(spaceX != 300) {
                for(var i=0; i< divs.length; i++) {
                    if(right(spaceX, spaceY) == parseInt(divs[i].innerHTML) - 1) {
                        divs[i].click();
                    }
                }
            }
            while(spaceY != 300) {
                for(var i=0; i< divs.length; i++) {
                    if(down(spaceX, spaceY) == parseInt(divs[i].innerHTML) - 1) {
                        divs[i].click();
                    }
                }
            }
    };
    
    //randomize the pos[] array
    var shuffleArray =function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        

        return array;
    };

    //swap the empty space with a div next to it
    var move = function() {
        var position = parseInt(this.innerHTML) - 1;
        if(canMove(parseInt(position))) {
            var divs = $('#puzzlearea').children('div');
            var tempy = pos[position].y;
            var tempx = pos[position].x;
            pos[position].y = spaceY;
            divs[position].style.top  = spaceY + 'px';
            spaceY = tempy;
            pos[position].x = spaceX;
            divs[position].style.left = spaceX + 'px';
            spaceX = tempx;
            
        }
    };
    
    var hoverOn = function() {
        var position = parseInt(this.innerHTML) - 1;
        if(canMove(parseInt(position))) {
          var divs = $('#puzzlearea').children('div');
            divs[position].classList.add('movablepiece');
        }
    }
    
        var hoverOff = function() {
        var position = parseInt(this.innerHTML) - 1;
        if(canMove(parseInt(position))) {
          var divs = $('#puzzlearea').children('div');
            divs[position].classList.remove('movablepiece');
        }
    }
    
    var canMove = function(position) {
        if(left(spaceX, spaceY) == (position)) {
            return true;
        }
        
        if(down(spaceX, spaceY) == (position))
	   {
		return true;
	   }
        
        if(up(spaceX, spaceY) == (position)) {
            return true;
        }
        
        if(right(spaceX, spaceY) == (position)) {
            return true;
        }
    };

function left(x, y) {
    var intX = parseInt(x);
    
    var intY = parseInt(y);
    
    if(intX > 0) {
        for(var i = 0; i < pos.length; i++) {
            if(parseInt(pos[i].x) + 100 == intX && parseInt(pos[i].y) == intY) {
                return i;
            }
        }
    } else {
        return -1;
    }
}
    
    function right(x, y) {
    var intX = parseInt(x);
    
    var intY = parseInt(y);
    
    if(intX < 300) {
        for(var i = 0; i < pos.length; i++) {
            if(parseInt(pos[i].x) - 100 == intX && parseInt(pos[i].y) == intY) {
                return i;
            }
        }
    } else {
        return -1;
    }
}

    function up(x, y) {
    var intX = parseInt(x);
    
    var intY = parseInt(y);
    
    if(intY > 0) {
        for(var i = 0; i < pos.length; i++) {
            if(parseInt(pos[i].y) + 100 == intY && parseInt(pos[i].x) == intX) {
                return i;
            }
        }
    } else {
        return -1;
    }
}
    
    function down(x, y) {
    var intX = parseInt(x);
    
    var intY = parseInt(y);
    
    if(intY < 300) {
        for(var i = 0; i < pos.length; i++) {
            if(parseInt(pos[i].y) - 100 == intY && parseInt(pos[i].x)==intX) {
                return i;
            }
        }
    } else {
        return -1;
    }
}
    $(document).ready(function () {

        init();
        //shuffle();
        $("#shufflebutton").click(shuffle);
        //function () {alert('shuffle');}
        $("#puzzlearea").children('div').click(move); $("#puzzlearea").children('div').mouseover(hoverOn); 
        $("#puzzlearea").children('div').mouseout(hoverOff); 
    });
})();