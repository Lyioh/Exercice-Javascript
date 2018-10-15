
// SOlution interessante mais qui ne marche pas.
/* document.querySelector("#image1").addEventListener("mouseenter", mouseEnter);
document.querySelector("#image1").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    let imgNew = document.createElement("IMG");
    imgNew.src = "images/image1_2.jpg";
    imgNew.setAttribute("id", "image1");
    let imgOld = document.querySelector("#image1");
    document.querySelector("body").replaceChild(imgNew, imgOld);
}

function mouseLeave() {
    let imgNew = document.createElement("IMG");
    imgNew.src = "images/image1.jpg";
    imgNew.setAttribute("id", "image1");
    let imgOld = document.querySelector("#image1");
    document.querySelector("body").replaceChild(imgNew, imgOld);
}  */


// Solution 1
imgSwitch = document.querySelector("#image1");

imgSwitch.addEventListener("mouseover", function imgSwitch(event) {
    event.target.src = "images/image1_2.jpg";
})

imgSwitch.addEventListener("mouseout", function imgSwitchBack(event) {
    event.target.src = "images/image1.jpg";
})

