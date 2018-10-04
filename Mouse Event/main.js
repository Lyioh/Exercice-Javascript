let myLoop = document.querySelectorAll(".hoverMe");

 for (i = 0; i < myLoop.length; i++) {
    myLoop[i].addEventListener("mouseover", function mouseOver() {
        this.style.opacity = "0";
    });
} 

function resetFunction() {
    for (i = 0; i < myLoop.length; i++) {
        myLoop[i].style.opacity = "1";
        myMove();
    };
}

document.querySelector(".button").addEventListener("click", resetFunction);

function myMove() {
    let pos = 300;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            for (i = 0; i < myLoop.length; i++) {
                pos--; 
                myLoop[i].style.right = pos + 'px'; 
                myLoop[i].style.left = pos + 'px'; 
            }
        }
    }
}

document.querySelector("body").addEventListener("mousemove", getPosition);

function getPosition() {
    let x = event.screenX;
    let y = event.screenY;
    let posX = "X coords: " + x;
    let posY = "Y coords: " + y;
    document.querySelector("#axe-x").innerHTML = posX;
    document.querySelector("#axe-y").innerHTML = posY;
}