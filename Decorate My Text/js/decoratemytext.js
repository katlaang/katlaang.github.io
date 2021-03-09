function doInterval() {
    var myVar = setInterval(biggerText, 500);
}

function biggerText() {
    var size = parseInt($("#txtDeco").css("font-size"));
    
    $("#txtDeco").css("font-size", size+2);
}

function bold() {
    
    var checked = $("#checkbling").is(":checked");
    
    if (checked) {
        $("#txtDeco").css("font-weight", "bold");
        $("#txtDeco").css("color", "green");
        $("#txtDeco").css("text-decoration", "underline");
        $("body").css("background-image", "url('images/100.jpg')")
    }
    else {
        $("#txtDeco").css("font-weight", "");
        $("#txtDeco").css("color", "");
        $("#txtDeco").css("text-decoration", "");
        $("body").css("background-image", "")
    }
}

function centralize() {
    var checked = $("#centralize").is(":checked");
    if(checked) {
        $("body").css("margin", "auto");
        $("#container").css("text-align", "center");
    } else {
        $("body").css("margin", "");
        $("#container").css("text-align", "");
    }
}

function startsWithVowel(word){
   var vowels = ("aeiou"); 
   return vowels.indexOf(word[0]) !== -1;
}

function pigLatin() {
    var vowels = ("aeiou");
    var text = $("#txtDeco").val();
    var textArray = text.split(" ");
    for(i = 0; i<textArray.length; i++) {
        if(!startsWithVowel(textArray[i].toLowerCase())) {
            textArray[i] = textArray[i].substring(1) + textArray[i].substring(0, 1); 
        } 
        textArray[i] = textArray[i] + "ay";
        
    }
    $("#txtDeco").val(textArray.join(" "));
}

function malkovitch() {
    var text = $("#txtDeco").val();
    var textArray = text.split(" ");
    for(i = 0; i<textArray.length; i++) {
        if(textArray[i].length > 5) {
            textArray[i] = "Malkovich"; 
        } 
    }
    $("#txtDeco").val(textArray.join(" "));
}