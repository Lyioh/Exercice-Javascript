document.querySelector(".conteneur").addEventListener("mouseover", function mouseOver(event) {
    let myTarget = event.target.id;
    if (myTarget == "image1") {
        document.querySelector("#image1").src = "images/image1_2.jpg";
    }
    else if (myTarget == "image2") {
        document.querySelector("#image2").src = "images/image2_2.jpg";
    }
    else if (myTarget == "image3") {
        document.querySelector("#image3").src = "images/image3_2.jpg";
    }
    else if (myTarget == "image4") {
        document.querySelector("#image4").src = "images/image4_2.jpg";
    }
    else if (myTarget == "image5") {
        document.querySelector("#image5").src = "images/image5_2.jpg";
    }

})

document.querySelector(".conteneur").addEventListener("mouseout", function mouseOut(event) {
    let myTarget = event.target.id;
    if (myTarget == "image1") {
        document.querySelector("#image1").src = "images/image1.jpg";
    }
    else if (myTarget == "image2") {
        document.querySelector("#image2").src = "images/image2.jpg";
    }
    else if (myTarget == "image3") {
        document.querySelector("#image3").src = "images/image3.jpg";
    }
    else if (myTarget == "image4") {
        document.querySelector("#image4").src = "images/image4.jpg";
    }
    else if (myTarget == "image5") {
        document.querySelector("#image5").src = "images/image5.jpg";
    }

})