//javascript:(function(){document.body.style.background = 'pink';})();

//javascript:(function(){alert(document.getElementsByClassName("Row-locked-in")[-1].childNodes[0]);})();
//javascript:(function(){console.log("hello");})();
//javascript:(function(){alert(document.getElementsByClassName("Row-locked-in")[0].childNodes[0].innerHTML);})();
javascript:(function(){var a = document.getElementsByClassName("Row-locked-in"); 

var row = a[a.length-1];
var guess = "";
var data = "";
for(var i = 0; i<5; i++){
    guess += row.childNodes[i].innerHTML;
    var b = (row.childNodes[i].classList[1]);
    if (b == "letter-absent"){
        data += "."
    }
    else if (b == "letter-elsewhere"){
        data += "?"
    }
    else if (b == "letter-correct"){
        data += "!"
    }
}
console.log(guess + data);
})();