// Detecting Button Press
var numOfLetterButtons = document.querySelectorAll(".letter").length;

for(var i = 0; i< numOfLetterButtons; i++){

    document.querySelectorAll(".letter")[i].addEventListener("click", function (){
    
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML)
    });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){

  makeSound(event.key.toLowerCase() || event.key.toUpperCase());
  
  buttonAnimation(event.key.toLowerCase() || event.key.toUpperCase())

});

function makeSound(selectedKey){
  switch (selectedKey) {
    
    case "a":
        var a = new Audio('alphabet/letter-a.mp3');
        a.play();
      break;

    case "b":
        var b = new Audio('alphabet/letter-b.mp3');
        b.play();
      break;
      
      case "c":
        var c = new Audio('alphabet/letter-c.mp3');
        c.play();
      break;
      
      case "d":
        var d = new Audio('alphabet/letter-d.mp3');
        d.play();
      break;
      
      case "e":
        var e = new Audio('alphabet/letter-e.mp3');
        e.play();
      break;
      
      case "f":
        var f = new Audio('alphabet/letter-f.mp3');
        f.play();
      break;
      
      case "g":
        var g = new Audio('alphabet/letter-g.mp3');
        g.play();
      break;
      
      case "h":
        var h = new Audio('alphabet/letter-h.mp3');
        h.play();
      break;
      
      case "i":
        var i = new Audio('alphabet/letter-i.mp3');
        i.play();
      break;
      
      case "j":
        var j = new Audio('alphabet/letter-j.mp3');
        j.play();
      break;
      
      case "k":
        var k = new Audio('alphabet/letter-k.mp3');
        k.play();
      break;
      
      case "l":
        var l = new Audio('alphabet/letter-l.mp3');
        l.play();
      break;
      
      case "m":
        var m = new Audio('alphabet/letter-m.mp3');
        m.play();
      break;
      
      case "n":
        var n = new Audio('alphabet/letter-n.mp3');
        n.play();
      break;
      
      case "o":
        var o = new Audio('alphabet/letter-o.mp3');
      o.play();
      break;
      
      case "p":
        var p = new Audio('alphabet/letter-p.mp3');
        p.play();
      break;
      
      case "q":
        var q = new Audio('alphabet/letter-q.mp3');
        q.play();
      break;
      
      case "r":
        var r = new Audio('alphabet/letter-r.mp3');
        r.play();
      break;
      
      case "s":
        var s = new Audio('alphabet/letter-s.mp3');
        s.play();
      break;
      
      case "t":
        var t = new Audio('alphabet/letter-t.mp3');
        t.play();
      break;
      
      case "u":
        var u = new Audio('alphabet/letter-u.mp3');
        u.play();
      break;
      
      case "v":
        var v = new Audio('alphabet/letter-v.mp3');
        v.play();
      break;
      
      case "w":
        var w = new Audio('alphabet/letter-w.mp3');
        w.play();
      break;
      
      case "x":
        var x = new Audio('alphabet/letter-x.mp3');
        x.play();
      break;
      
      case "y":
        var y = new Audio('alphabet/letter-y.mp3');
        y.play();
      break;
      
      case "z":
        var z = new Audio('alphabet/letter-z.mp3');
        z.play();
      break;

    default: console.log();
        
}
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}